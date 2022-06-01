import { Injectable } from '@nestjs/common';
import { JwtService } from './jwt/jwt.service';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}
  getHello(): string {
    return this.jwtService.bye();
  }
}
