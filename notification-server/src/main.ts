import { NestFactory } from '@nestjs/core';
import { NotificationModule } from './notification.module';
import { NatsOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(NotificationModule, {
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
    }
  } as NatsOptions);
  await app.listen();
}
bootstrap();
