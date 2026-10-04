import { Controller, NotImplementedException, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VendorOnboardingService } from './vendor-onboarding.service';

@ApiTags('vendor-onboarding')
@Controller('api/vendor-onboarding')
export class VendorOnboardingController {
  constructor(private readonly vendoronboarding: VendorOnboardingService) {}

  @Post('api/vendor/profile')
  async postApiVendorProfile() {
    throw new NotImplementedException();
  }

  @Post('api/vendor/documents')
  async postApiVendorDocuments() {
    throw new NotImplementedException();
  }

  @Get('api/vendor/documents')
  async getApiVendorDocuments() {
    throw new NotImplementedException();
  }

}
