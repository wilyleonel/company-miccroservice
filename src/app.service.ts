import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCompanyProfile() {
    return {
      id: 'COMP-001',
      name: 'Tech Solutions Inc.',
      industry: 'Technology',
      foundedYear: 2010,
      description: 'Leading provider of innovative software solutions.',
      contactEmail: 'contact@techsolutions.com',
      location: 'San Francisco, CA'
    };
  }
}
