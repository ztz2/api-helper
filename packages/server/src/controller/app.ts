import { Get, Post, Controller, Body } from '@nestjs/common';

import { swagger20 } from '../mock/api';
import { Result } from '../utils/result';
import { AppService } from '../service/app';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return await this.appService.getHello();
  }

  @Get('/app/swagger/test')
  async test() {
    return swagger20;
  }

  // @Get('/app/swagger/mock')
  // async getMockData() {
  //   const res = await this.appService.getMockData();
  //   return Result.success(res);
  // }

  @Post('/app/docs')
  async getDocs(@Body() body: any) {
    const res = await this.appService.getDocs(body);
    if (res.length === 0) {
      return Result.fail('没有找到可以生成swagger配置文件');
    }
    return Result.success(res);
  }
}
