import { Controller, NotImplementedException, Put, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotificationPreferencesService } from './notification-preferences.service';

@ApiTags('notification-preferences')
@Controller('api/notification-preferences')
export class NotificationPreferencesController {
  constructor(private readonly notificationpreferences: NotificationPreferencesService) {}

  @Put('api/notifications/preferences')
  async putApiNotificationsPreferences() {
    throw new NotImplementedException();
  }

  @Get('api/notifications/preferences')
  async getApiNotificationsPreferences() {
    throw new NotImplementedException();
  }

}
