import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const swagger = new DocumentBuilder()
    .setTitle('Order Service')
    .setDescription('Order, payment and escrow APIs')
    .setVersion('1.0.0')
    .build();

  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, swagger));

  await app.listen(process.env.PORT ? Number(process.env.PORT) : 3004);
}

void bootstrap();
