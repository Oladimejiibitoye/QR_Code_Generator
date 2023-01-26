import { Module } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';
import { QrcodeController } from './qrcode.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [QrcodeService],
  controllers: [QrcodeController],
  imports: [PrismaModule]
})
export class QrcodeModule {}
