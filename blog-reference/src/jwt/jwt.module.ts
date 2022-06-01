import { DynamicModule, Global, Module } from '@nestjs/common';
import { JWTModuleOptions } from './interfaces/jwt-module-options';
import { JwtService } from './jwt.service';
import { PASSWORD } from './password';

@Module({})
@Global()
export class JwtModule {
  static forRoot(options: JWTModuleOptions): DynamicModule {
    return {
      ...options,
      global: true,
      module: JwtModule,
      providers: [
        {
          provide: PASSWORD,
          useValue: options,
        },
        {
          provide: JwtService,
          useClass: JwtService,
        },
      ],
      exports: [JwtService],
    };
  }
}
