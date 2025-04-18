import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('prefix')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hoge')
  getHello(): string {
    return this.appService.getHello();
  }
}
