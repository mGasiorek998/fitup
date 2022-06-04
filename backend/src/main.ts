import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.REDIS,
    url: 'redis://127.0.0.1:6379',
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Fitup')
    .setDescription('The fitup API description')
    .setVersion('1.0')
    .addTag('fitup')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  app.enableCors({
    origin: 'http://localhost:3000',
  });
  await app.startAllMicroservices();
  await app.listen(8000);
}
bootstrap();
