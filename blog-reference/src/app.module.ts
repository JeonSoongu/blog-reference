import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from './jwt/jwt.module';
import { PASSWORD } from './jwt/password';

@Module({
  imports: [JwtModule.forRoot({ privateKey: PASSWORD })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
