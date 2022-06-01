import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from './jwt/jwt.module';

@Module({
  imports: [JwtModule.forRoot({ privateKey: 'string' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
