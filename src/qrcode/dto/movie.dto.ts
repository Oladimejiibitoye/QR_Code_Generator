import { IsNotEmpty, IsString} from 'class-validator'

export class MovieDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    image: string
}