import { NestFactory } from '@nestjs/core';
import { Transport, NatsOptions } from '@nestjs/microservices';

import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
    }
  } as NatsOptions);
  await app.listen();
}
bootstrap();
