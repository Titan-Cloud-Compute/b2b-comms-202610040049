import { Controller, NotImplementedException, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InvoiceGenerationService } from './invoice-generation.service';

@ApiTags('invoice-generation')
@Controller('api/invoice-generation')
export class InvoiceGenerationController {
  constructor(private readonly invoicegeneration: InvoiceGenerationService) {}

  @Post('api/invoices')
  async postApiInvoices() {
    throw new NotImplementedException();
  }

  @Get('api/invoices/:id/download')
  async getApiInvoices:idDownload() {
    throw new NotImplementedException();
  }

}
