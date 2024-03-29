import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { QrcodeModule } from './qrcode/qrcode.module';

@Module({
  imports: [PrismaModule, QrcodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
