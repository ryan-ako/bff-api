import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  checkEnv(): string {
    const env = process.env.NODE_ENV;
    return `Your current environment is: ${env}`;
  }
}
