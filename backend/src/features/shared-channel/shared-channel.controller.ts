import { Controller, NotImplementedException, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SharedChannelService } from './shared-channel.service';

@ApiTags('shared-channel')
@Controller('api/shared-channel')
export class SharedChannelController {
  constructor(private readonly sharedchannel: SharedChannelService) {}

  @Post('api/channels')
  async postApiChannels() {
    throw new NotImplementedException();
  }

  @Post('api/channels/:id/messages')
  async postApiChannels:idMessages() {
    throw new NotImplementedException();
  }

  @Get('api/channels')
  async getApiChannels() {
    throw new NotImplementedException();
  }

}
