import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
const jwksClient = require('jwks-rsa');
const jwt = require('jsonwebtoken');
import { ConfigService } from '../../config/config.service';
import { throwError } from 'rxjs';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly config: ConfigService) {}

  use(req: Request, res: Response, next: Function) {
    const JWKS_URL = this.config.get('JWKS_URL');
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization.slice(7);
    } else {
      res.status(401).send('Unauthorized!');
    }
    console.log(token);

    const client = jwksClient({
      jwksUri: JWKS_URL,
    });

    function getKey(header, callback) {
      client.getSigningKey(header.kid, (err, key) => {
        // console.log('key', key);
        let signingKey;
        if (key) {
          signingKey = key.publicKey || key.rsaPublicKey;
        }
        callback(null, signingKey);
      });
    }

    jwt.verify(token, getKey, undefined, (err, decoded) => {
      // console.log('decoded', decoded); // bar
      if (decoded) {
        next();
      } else {
        // next();
        res.status(401).send('Unauthorized!');
      }
      return decoded;
    });
    // console.log('decoded', decoded);
    console.log('Request...');
    // next();
  }
}
