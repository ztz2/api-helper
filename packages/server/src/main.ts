import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app';

async function bootstrap() {
  const port = 3210;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`启动成功：http://localhost:${port}`);
}

bootstrap();
