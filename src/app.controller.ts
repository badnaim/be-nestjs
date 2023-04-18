import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('one')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHello(@Body() body: any): string {
    return this.appService.getHello();
  }
}
