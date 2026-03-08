import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('company')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getCompanyProfile() {
    return this.appService.getCompanyProfile();
  }
}
