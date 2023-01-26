import { BadRequestException, Injectable } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { shuffle } from 'src/utils/helper';


@Injectable()
export class QrcodeService {
  constructor(private prisma: PrismaService){}

  async getTenRandomMovies(){
    try {
      //get all movies from database
      const movies: Movie[] = await this.prisma.movie.findMany()
      //use shuffle function to shuffle movies
      const shuffledMovies: Movie[] = shuffle(movies);
      //slice movies to 10 movies
      const tenRandomMovies: Movie[] = shuffledMovies.slice(0, 10)
      return tenRandomMovies
    } catch (error) {
      throw new BadRequestException(error.message)
    }
    
  }
}
