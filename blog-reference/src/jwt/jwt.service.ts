import { Inject, Injectable } from '@nestjs/common';
import { JWTModuleOptions } from './interfaces/jwt-module-options';
import { PASSWORD } from './password';

@Injectable()
export class JwtService {
  constructor(@Inject(PASSWORD) private readonly options: JWTModuleOptions) {}

  hello() {
    console.log('hello');
  }

  bye() {
    return this.options.privateKey === PASSWORD ? 'Hi~' : 'Bye~';
  }
}
