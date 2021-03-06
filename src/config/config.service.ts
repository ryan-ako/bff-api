import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    // console.log(`filePath: ${filePath}`);
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    // console.log(`envConfig: ${JSON.stringify(this.envConfig)}`);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
