import { Module } from '@nestjs/common';
import { AppController } from '../controller/app';
import { AppService } from '../service/app';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
