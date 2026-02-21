# 7 AI Prompts to Build B2B Marketplace Platform
## Complete Development Guide Using AI-Assisted Coding

---

## Prompt 1: Project Setup & Architecture Foundation

```text
I want to build a B2B marketplace platform similar to Made-in-China.com using a modern tech stack.

Create a complete project setup with the following specifications:

**TECH STACK:**
- Frontend: Next.js 14 with TypeScript, Tailwind CSS, shadcn/ui
- Backend: NestJS microservices with TypeScript
- Database: PostgreSQL with Prisma ORM
- Cache: Redis
- Search: Elasticsearch
- Message Queue: RabbitMQ
- API Gateway: Kong
- Monorepo: TurboRepo with pnpm workspaces

**DELIVERABLES:**
1. Complete folder structure for a monorepo with these apps:
   - apps/web (Next.js frontend)
   - apps/user-service (NestJS)
   - apps/product-service (NestJS)
   - apps/rfq-service (NestJS)
   - apps/order-service (NestJS)
   - apps/payment-service (NestJS)
   - apps/messaging-service (NestJS + Socket.io)
   - apps/api-gateway (Kong configuration)
   - packages/shared-types
   - packages/database (Prisma)

2. Root configuration files:
   - package.json with workspace setup
   - turbo.json for build pipeline
   - docker-compose.yml for local development
   - .gitignore

3. Each service should have:
   - package.json with dependencies
   - tsconfig.json
   - Basic folder structure (src/, test/)

4. Docker Compose should include:
   - PostgreSQL primary + replica
   - Redis
   - Elasticsearch
   - RabbitMQ
   - Kong API Gateway
   - MinIO (S3-compatible storage)

5. A setup script that initializes everything

**REQUIREMENTS:**
- All code must be production-ready
- Include health checks for all services
- Use environment variables for configuration
- Follow best practices for security
- Include comments explaining key decisions

Generate the complete project structure with all configuration files.
```

---

## Prompt 2: Database Schema & Shared Types

```text
I need a complete database schema for a B2B marketplace platform. Create the Prisma schema with all necessary models.

**BUSINESS REQUIREMENTS:**
- Users can be BUYERS or SUPPLIERS
- Suppliers have company profiles with verification
- Products belong to categories with attributes
- Buyers can create RFQs (Request for Quotations)
- Suppliers can submit quotes on RFQs
- Orders are created from accepted quotes
- Payment escrow system
- Real-time messaging between buyers and suppliers
- Notification system

**MODELS TO CREATE:**

1. User & Authentication:
   - User (id, email, passwordHash, profile, role, status, verification)
   - UserSession (token management)
   - RefreshToken (JWT refresh)
   - EmailVerification
   - PasswordReset
   - AuditLog

2. Company Management:
   - Company (profile, verification status, business details)
   - CompanyAddress (multiple addresses)
   - CompanyCertification (ISO, etc.)
   - VerificationDocument

3. Product Catalog:
   - Category (hierarchical with attributes)
   - CategoryAttribute (dynamic attributes per category)
   - Product (with variants, pricing, inventory)
   - ProductImage
   - ProductVideo
   - ProductSpecification
   - ProductVariant
   - TierPrice (volume pricing)

4. RFQ System:
   - RFQ (request details, specifications, deadline)
   - RFQSpecification
   - RFQAttachment
   - Quote (supplier response)
   - QuoteSpecification
   - QuoteAttachment
   - QuoteMessage

5. Order Management:
   - Order (with full details)
   - OrderItem
   - OrderTimeline (status history)
   - OrderDocument
   - PaymentMilestone
   - PaymentTransaction

6. Messaging:
   - Conversation
   - ConversationParticipant
   - Message
   - MessageRead

7. Notifications:
   - Notification
   - NotificationPreference

8. System:
   - SystemSetting

**REQUIREMENTS:**
- All enums must be defined
- Proper relations with cascade deletes where appropriate
- Indexes on frequently queried fields
- Full-text search support
- Timestamps (createdAt, updatedAt) on all models
- Soft delete considerations
- JSON fields for flexible data

**ADDITIONAL DELIVERABLES:**
1. Complete TypeScript types in packages/shared-types
2. Database seed script with sample data
3. Migration guide
4. ER diagram description

Generate the complete Prisma schema and shared types.
```

---

## Prompt 3: Authentication & User Management Service

```text
Build a complete Authentication and User Management microservice using NestJS.

**FEATURES TO IMPLEMENT:**

1. Authentication:
   - User registration (buyer/supplier roles)
   - Login with email/password
   - JWT access token (15 min expiry)
   - JWT refresh token (7 day expiry)
   - Token refresh endpoint
   - Logout (revoke tokens)
   - Logout from all devices
   - Password reset flow
   - Email verification
   - Resend verification email
   - Change password

2. Security:
   - bcrypt password hashing (12 rounds)
   - Rate limiting (100 req/min)
   - Account lockout after 5 failed attempts
   - Session management with Redis
   - Audit logging
   - CORS configuration
   - Helmet security headers

3. User Management:
   - Get user profile
   - Update profile
   - Get user sessions
   - Revoke specific session
   - Admin: List all users
   - Admin: Update user
   - Admin: Delete user
   - Admin: Suspend/Activate user

**TECHNICAL REQUIREMENTS:**
- Use Prisma for database access
- Use Redis for session storage
- Implement JWT strategy with Passport
- Use class-validator for DTOs
- Implement proper error handling
- Add Swagger documentation
- Write unit tests (Jest)
- Write E2E tests

**API ENDPOINTS:**
POST   /auth/register
POST   /auth/login
POST   /auth/refresh
POST   /auth/logout
POST   /auth/logout-all
POST   /auth/forgot-password
POST   /auth/reset-password
POST   /auth/verify-email
POST   /auth/resend-verification
POST   /auth/change-password
GET    /auth/me

GET    /users
GET    /users/:id
PUT    /users/:id
GET    /users/profile
PATCH  /users/profile
GET    /users/sessions
DELETE /users/sessions/:id

**DELIVERABLES:**
1. Complete auth.module.ts
2. auth.service.ts with all methods
3. auth.controller.ts with all endpoints
4. JWT strategy implementation
5. Local strategy implementation
6. Refresh token strategy
7. All DTOs with validation
8. Guards (JwtAuthGuard, RolesGuard)
9. Decorators (CurrentUser, Roles)
10. Unit tests for auth.service
11. E2E tests for auth controller

Generate production-ready code with proper error handling and security.
```

---

## Prompt 4: Product Catalog & Search Service

```text
Build a complete Product Catalog microservice with advanced search capabilities.

**FEATURES TO IMPLEMENT:**

1. Category Management:
   - Hierarchical categories (parent/child)
   - Category attributes (dynamic fields)
   - Category CRUD (Admin)

2. Product Management:
   - Create product (supplier only)
   - Update product
   - Delete product
   - Product status workflow (draft → pending → active)
   - Product variants (size, color, etc.)
   - Tier pricing (volume discounts)
   - Product images (multiple)
   - Product videos
   - Product specifications
   - Inventory tracking

3. Search & Discovery:
   - Full-text search (Elasticsearch)
   - Filter by category
   - Filter by price range
   - Filter by MOQ
   - Filter by country
   - Filter by certifications
   - Filter by business type
   - Filter by attributes
   - Sort options (relevance, price, newest)
   - Pagination
   - Faceted search (aggregations)

4. Featured Products:
   - Mark products as featured (Admin)
   - Get featured products endpoint

5. Admin Features:
   - Approve/reject products
   - Get pending review products
   - Feature/unfeature products

**TECHNICAL REQUIREMENTS:**
- NestJS with Prisma
- Elasticsearch integration
- File upload to S3/MinIO
- Image optimization
- Caching with Redis
- Rate limiting
- Swagger docs
- Comprehensive tests

**API ENDPOINTS:**
GET    /products
GET    /products/:id
POST   /products
PUT    /products/:id
DELETE /products/:id
GET    /products/search
GET    /products/featured
GET    /products/my-products
POST   /products/:id/images
PATCH  /products/:id/status
POST   /products/:id/duplicate

GET    /categories
GET    /categories/:id
POST   /categories (Admin)
PUT    /categories/:id (Admin)
DELETE /categories/:id (Admin)

GET    /categories/:id/attributes
POST   /categories/:id/attributes (Admin)

GET    /products/admin/pending-review (Admin)
POST   /products/:id/approve (Admin)
POST   /products/:id/reject (Admin)
POST   /products/:id/feature (Admin)

**ELASTICSEARCH REQUIREMENTS:**
- Product index with mappings
- Search query builder
- Suggestions/autocomplete
- Aggregations for filters

**DELIVERABLES:**
1. Complete product module
2. Product service with CRUD
3. Product controller
4. Category service
5. Category controller
6. Search service (Elasticsearch)
7. File upload service
8. All DTOs
9. Unit tests
10. E2E tests
11. Elasticsearch index configuration

Generate production-ready code with search optimization.
```

---

## Prompt 5: RFQ (Request for Quotation) System

```text
Build a complete RFQ system where buyers can request quotes and suppliers can respond.

**FEATURES TO IMPLEMENT:**

1. RFQ Management (Buyer):
   - Create RFQ with:
     - Title and description
     - Category selection
     - Quantity and unit
     - Target price (optional)
     - Specifications (dynamic)
     - Delivery requirements
     - Preferred certifications
     - Attachments
     - Deadline
     - Visibility (public/private/invite-only)
   - Edit RFQ (before publishing)
   - Publish RFQ
   - Close RFQ
   - Cancel RFQ
   - View RFQ details
   - List my RFQs
   - View quotes received
   - Accept/reject quotes

2. Quote Management (Supplier):
   - Browse available RFQs
   - View RFQ details
   - Submit quote with:
     - Price and currency
     - Quantity
     - Validity period
     - Delivery time
     - Shipping cost
     - Payment terms
     - Specifications compliance
     - Sample availability
     - Additional info
     - Attachments
   - Edit quote (before acceptance)
   - Withdraw quote
   - View my quotes
   - Message buyer about quote

3. RFQ Discovery:
   - List all public RFQs
   - Filter by category
   - Filter by location
   - Filter by deadline
   - Search RFQs
   - Pagination

4. Quote Comparison:
   - Compare multiple quotes side-by-side
   - Sort by price, delivery time

**BUSINESS RULES:**
- Only verified suppliers can submit quotes
- Buyers can only accept one quote per RFQ
- Quotes expire after validity period
- RFQs expire after deadline
- Closed/cancelled RFQs cannot receive new quotes
- Suppliers can only submit one quote per RFQ

**TECHNICAL REQUIREMENTS:**
- NestJS with Prisma
- Real-time notifications (RabbitMQ)
- Email notifications
- File upload support
- Validation rules
- Swagger docs
- Comprehensive tests

**API ENDPOINTS:**
GET    /rfqs
GET    /rfqs/:id
POST   /rfqs
PUT    /rfqs/:id
POST   /rfqs/:id/publish
POST   /rfqs/:id/close
POST   /rfqs/:id/cancel
GET    /rfqs/my-rfqs
GET    /rfqs/:id/quotes

GET    /quotes
GET    /quotes/:id
POST   /quotes
PUT    /quotes/:id
POST   /quotes/:id/withdraw
POST   /quotes/:id/accept
POST   /quotes/:id/reject
GET    /quotes/my-quotes
POST   /quotes/:id/messages

**DELIVERABLES:**
1. RFQ module structure
2. RFQ service with all business logic
3. RFQ controller
4. Quote service
5. Quote controller
6. Notification service integration
7. All DTOs with validation
8. Unit tests
9. E2E tests
10. Business logic documentation

Generate production-ready code with all business rules enforced.
```

---

## Prompt 6: Order Management & Payment Service

```text
Build a complete Order Management and Payment system with escrow functionality.

**FEATURES TO IMPLEMENT:**

1. Order Management:
   - Create order from accepted quote
   - Order status workflow:
     PENDING_CONFIRMATION → CONFIRMED → IN_PRODUCTION →
     READY_FOR_SHIPMENT → SHIPPED → IN_TRANSIT → DELIVERED → COMPLETED
   - Order confirmation (supplier)
   - Mark as in production
   - Mark as ready for shipment
   - Add tracking information
   - Mark as shipped
   - Mark as delivered
   - Mark as completed
   - Cancel order
   - View order details
   - List orders (buyer/supplier)
   - Order timeline/history
   - Upload order documents (invoices, BOL, etc.)

2. Payment Management:
   - Create payment intent
   - Support multiple payment methods (card, bank transfer)
   - Payment milestone setup
   - Escrow payment collection
   - Milestone payment release
   - Final payment processing
   - Refund processing
   - Payment transaction history
   - Payment status tracking

3. Escrow System:
   - Hold funds in escrow
   - Release conditions configuration
   - Dispute handling (basic)
   - Automatic release after delivery confirmation
   - Partial release for milestones

4. Milestone Payments:
   - Define payment milestones (e.g., 30% deposit, 70% on delivery)
   - Track milestone status
   - Process milestone payments
   - Overdue notifications

**PAYMENT INTEGRATION:**
- Stripe for card payments
- Support for bank transfers
- Webhook handling
- Idempotency keys

**BUSINESS RULES:**
- Order total must match quote price
- Payment must be received before production starts
- Escrow releases only after delivery confirmation
- Refunds processed within 5-10 business days
- All payments tracked in transaction log

**TECHNICAL REQUIREMENTS:**
- NestJS with Prisma
- Stripe integration
- Idempotent payment processing
- Transaction safety
- Webhook security
- Comprehensive logging
- Swagger docs
- Tests

**API ENDPOINTS:**
GET    /orders
GET    /orders/:id
POST   /orders
POST   /orders/:id/confirm
POST   /orders/:id/production
POST   /orders/:id/ready-for-shipment
POST   /orders/:id/ship
POST   /orders/:id/deliver
POST   /orders/:id/complete
POST   /orders/:id/cancel
GET    /orders/:id/timeline
POST   /orders/:id/documents

POST   /payments/intent
POST   /payments/confirm
POST   /payments/:id/refund
GET    /payments/transactions

POST   /escrow/release
GET    /escrow/:orderId/status

**DELIVERABLES:**
1. Order module structure
2. Order service with workflow
3. Order controller
4. Payment service (Stripe integration)
5. Payment controller
6. Escrow service
7. Webhook handlers
8. All DTOs
9. Unit tests
10. E2E tests
11. Payment flow documentation

Generate production-ready code with secure payment handling.
```

---

## Prompt 7: Frontend Application & Real-time Messaging

```text
Build a complete Next.js frontend for the B2B marketplace with real-time messaging.

**FEATURES TO IMPLEMENT:**

1. Public Pages:
   - Homepage with featured products
   - Product listing with filters
   - Product detail page
   - Category browsing
   - Search results
   - Supplier directory
   - Supplier profile page
   - RFQ listing (public)
   - About, Contact, Terms pages

2. Authentication Pages:
   - Login page
   - Register page (buyer/supplier selection)
   - Forgot password
   - Reset password
   - Email verification

3. Buyer Dashboard:
   - Dashboard overview
   - My RFQs
   - Create RFQ wizard
   - RFQ detail with quotes
   - Compare quotes
   - My Orders
   - Order tracking
   - Messages
   - Profile settings
   - Company profile (if supplier)

4. Supplier Dashboard:
   - Dashboard overview
   - My Products
   - Add/Edit product
   - Browse RFQs
   - My Quotes
   - Submit quote
   - My Orders
   - Messages
   - Company profile
   - Verification documents

5. Admin Dashboard:
   - User management
   - Company verification
   - Product approval
   - Category management
   - RFQ monitoring
   - Order monitoring
   - System settings

6. Real-time Messaging:
   - Conversation list
   - Chat interface
   - Send/receive messages
   - File attachments
   - Typing indicators
   - Read receipts
   - Notifications

7. UI Components:
   - Header with navigation
   - Footer
   - Product cards
   - RFQ cards
   - Quote cards
   - Order timeline
   - Search filters
   - Pagination
   - Image gallery
   - File uploader
   - Rich text editor

**TECHNICAL REQUIREMENTS:**
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Query (TanStack Query)
- Zustand for state management
- Socket.io client for real-time
- React Hook Form
- React Dropzone for uploads
- Date-fns for dates

**STATE MANAGEMENT:**
- Auth context
- Cart/RFQ context
- Notification context
- Theme context

**API INTEGRATION:**
- Axios instance with interceptors
- Automatic token refresh
- Error handling
- Loading states
- Optimistic updates

**PERFORMANCE:**
- Image optimization (Next.js Image)
- Code splitting
- Lazy loading
- Caching strategies
- Skeleton loaders

**SEO:**
- Meta tags
- Open Graph
- Structured data
- Sitemap
- robots.txt

**DELIVERABLES:**
1. Complete Next.js project structure
2. App router setup
3. Layout components (Header, Footer)
4. Page components for all routes
5. Reusable UI components
6. API client setup
7. Auth context and hooks
8. Real-time messaging hook
9. Form components with validation
10. Dashboard layouts
11. Loading and error states
12. Responsive design
13. Dark mode support

**PAGES TO CREATE:**
- /
- /auth/login
- /auth/register
- /auth/forgot-password
- /products
- /products/[id]
- /categories/[slug]
- /suppliers
- /suppliers/[id]
- /rfqs
- /rfqs/[id]
- /dashboard (buyer/supplier)
- /dashboard/rfqs
- /dashboard/orders
- /dashboard/products
- /dashboard/messages
- /dashboard/profile
- /admin/*

Generate production-ready frontend code with modern best practices.
```

---

## How to Use These Prompts

### Phase-by-Phase Execution

| Phase | Prompt | Duration | Output |
|-------|--------|----------|--------|
| 1 | Project Setup | 1-2 days | Complete monorepo structure |
| 2 | Database Schema | 1 day | Prisma schema + types |
| 3 | Authentication | 2-3 days | Working auth system |
| 4 | Product Catalog | 3-4 days | Product + search |
| 5 | RFQ System | 3-4 days | RFQ + quotes |
| 6 | Orders + Payments | 4-5 days | Full order flow |
| 7 | Frontend | 5-7 days | Complete UI |

### Best Practices

1. **Start with Prompt 1** and get the foundation right.
2. **Review each phase** before moving to the next.
3. **Test thoroughly** at each phase.
4. **Use the generated code** as your base.
5. **Customize** for your specific needs.
6. **Iterate** based on requirements.

### Tools to Use

- **Claude/Codeium/Cursor** for code generation
- **ChatGPT** for explanations and debugging
- **GitHub Copilot** for inline suggestions
- **V0.dev** for UI components
- **Supabase** for managed database (optional)
- **Vercel** for frontend deployment
- **Railway/Render** for backend deployment

---

## Additional Resources

### Starter Templates

- [NestJS Starter](https://github.com/nestjs/typescript-starter)
- [Next.js with Tailwind](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss)
- [Turborepo Design System](https://github.com/vercel/turborepo/tree/main/examples/design-system)

### Documentation

- [NestJS Docs](https://docs.nestjs.com/)
- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Deployment Guides

- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- [AWS Deployment](https://aws.amazon.com/getting-started/hands-on/deploy-nodejs-web-app/)

---

**Total Estimated Development Time: 20-28 days**

With these prompts, you can build a complete B2B marketplace platform using AI-assisted development. Each prompt is comprehensive and can be fed directly to AI coding assistants to generate production-ready code.
