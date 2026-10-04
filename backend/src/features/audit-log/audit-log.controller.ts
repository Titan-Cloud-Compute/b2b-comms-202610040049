import { Controller, NotImplementedException, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuditLogService } from './audit-log.service';

@ApiTags('audit-log')
@Controller('api/audit-log')
export class AuditLogController {
  constructor(private readonly auditlog: AuditLogService) {}

  @Get('api/admin/audit-log')
  async getApiAdminAuditLog() {
    throw new NotImplementedException();
  }

  @Post('api/admin/audit-log')
  async postApiAdminAuditLog() {
    throw new NotImplementedException();
  }

}
