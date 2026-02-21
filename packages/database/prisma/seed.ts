import {
  PrismaClient,
  ProductStatus,
  RFQStatus,
  RFQVisibility,
  UserRole,
  UserStatus,
  VerificationStatus,
} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const buyer = await prisma.user.upsert({
    where: { email: 'buyer@example.com' },
    update: {},
    create: {
      email: 'buyer@example.com',
      passwordHash: 'hashed_password_buyer',
      firstName: 'Bella',
      lastName: 'Buyer',
      role: UserRole.BUYER,
      status: UserStatus.ACTIVE,
      verificationStatus: VerificationStatus.VERIFIED,
    },
  });

  const supplier = await prisma.user.upsert({
    where: { email: 'supplier@example.com' },
    update: {},
    create: {
      email: 'supplier@example.com',
      passwordHash: 'hashed_password_supplier',
      firstName: 'Sam',
      lastName: 'Supplier',
      role: UserRole.SUPPLIER,
      status: UserStatus.ACTIVE,
      verificationStatus: VerificationStatus.VERIFIED,
    },
  });

  const company = await prisma.company.upsert({
    where: { slug: 'sam-industrial-ltd' },
    update: {},
    create: {
      ownerId: supplier.id,
      legalName: 'Sam Industrial Limited',
      displayName: 'Sam Industrial',
      slug: 'sam-industrial-ltd',
      description: 'Industrial hardware supplier',
      country: 'CN',
      businessType: 'MANUFACTURER',
      verificationStatus: VerificationStatus.VERIFIED,
      profileCompleteness: 95,
    },
  });

  const category = await prisma.category.upsert({
    where: { slug: 'industrial-fasteners' },
    update: {},
    create: {
      name: 'Industrial Fasteners',
      slug: 'industrial-fasteners',
      description: 'Bolts, nuts, and washers for industrial use',
      level: 0,
      isActive: true,
    },
  });

  const product = await prisma.product.upsert({
    where: { slug: 'stainless-steel-hex-bolt-m8' },
    update: {},
    create: {
      supplierId: supplier.id,
      companyId: company.id,
      categoryId: category.id,
      title: 'Stainless Steel Hex Bolt M8',
      slug: 'stainless-steel-hex-bolt-m8',
      shortDescription: 'Corrosion-resistant M8 bolts for manufacturing lines.',
      status: ProductStatus.ACTIVE,
      minOrderQty: 1000,
      unit: 'pcs',
      basePrice: '0.12',
      currency: 'USD',
      inventoryQty: 250000,
      originCountry: 'CN',
      tags: ['bolt', 'stainless-steel', 'm8'],
    },
  });

  await prisma.productImage.createMany({
    data: [
      {
        productId: product.id,
        url: 'https://cdn.example.com/products/bolt-m8-primary.jpg',
        altText: 'M8 Hex Bolt',
        isPrimary: true,
      },
      {
        productId: product.id,
        url: 'https://cdn.example.com/products/bolt-m8-side.jpg',
        altText: 'M8 Hex Bolt side angle',
      },
    ],
    skipDuplicates: true,
  });

  const rfq = await prisma.rFQ.create({
    data: {
      buyerId: buyer.id,
      categoryId: category.id,
      title: 'RFQ - M8 Stainless Bolts for Q2 Production',
      description: 'Need consistent quality stainless bolts for machinery assembly.',
      quantity: 50000,
      unit: 'pcs',
      targetPrice: '0.10',
      currency: 'USD',
      visibility: RFQVisibility.PUBLIC,
      status: RFQStatus.PUBLISHED,
      deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14),
      preferredCertifications: ['ISO9001'],
      specifications: {
        create: [
          { name: 'Material', value: 'SS304' },
          { name: 'Thread Pitch', value: '1.25', unit: 'mm' },
        ],
      },
    },
  });

  await prisma.quote.create({
    data: {
      rfqId: rfq.id,
      supplierId: supplier.id,
      price: '0.095',
      currency: 'USD',
      quantity: 50000,
      validUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
      deliveryTimeDays: 21,
      shippingCost: '150.00',
      paymentTerms: '30% upfront, 70% before shipment',
      sampleAvailable: true,
      additionalInformation: 'Includes material test reports and batch QC record.',
    },
  });

  // eslint-disable-next-line no-console
  console.log('Seed completed successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
