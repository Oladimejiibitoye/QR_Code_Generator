import { Controller, Get, Res, Render, Req, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';
import { Movie } from '@prisma/client';
import { QrcodeService } from './qrcode.service';
import * as QRCode from 'qrcode'

@Controller('qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Get()
  async GetQrCode(@Req() req: Request, @Res() res: Response){
      const url = `${req.protocol}://${req.get('host')}/api/qrcode/movies`
      const qrcode = await QRCode.toDataURL(url)
      return res.render('qrcode', {qrcode})
  }


  @Get('movies')
  async GetTenRandomMovies(@Res() res: Response){
    const tenRandomMovies: Movie[] = await this.qrcodeService.getTenRandomMovies()
    return res.render('movies', {tenRandomMovies})
  }
}
