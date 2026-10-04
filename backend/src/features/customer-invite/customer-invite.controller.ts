import { Controller, NotImplementedException, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerInviteService } from './customer-invite.service';

@ApiTags('customer-invite')
@Controller('api/customer-invite')
export class CustomerInviteController {
  constructor(private readonly customerinvite: CustomerInviteService) {}

  @Post('api/admin/customers/invite')
  async postApiAdminCustomersInvite() {
    throw new NotImplementedException();
  }

  @Get('api/admin/customers')
  async getApiAdminCustomers() {
    throw new NotImplementedException();
  }

}
