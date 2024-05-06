import { NestFactory } from '@nestjs/core';
import { PostModule } from './post.module';
import { NatsOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(PostModule, {
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
    }
  } as NatsOptions);
  await app.listen();
}
bootstrap();
