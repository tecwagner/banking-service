import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  get apiPort(): number {
    return +this.configService.get('api_port');
  }

  get dbHost(): string | undefined {
    return this.configService.get('database.db_host');
  }

  get dbPort(): number {
    return +this.configService.get('database.db_port');
  }

  get dbUserName(): string | undefined {
    return this.configService.get('database.db_username');
  }
  get dbPassword(): string | undefined {
    return this.configService.get('database.db_password');
  }

  get dbName(): string | undefined {
    return this.configService.get('database.db_name');
  }
}
