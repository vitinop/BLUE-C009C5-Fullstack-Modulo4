import { IsUrl, IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateMovieDto {
  @IsNotEmpty({ message: 'Campo"vazio" inválido, informe o Nome do filme' })
  name: string;

  @IsNotEmpty({
    message: 'Campo"vazio" inválido, informe a data de lançamento do filme',
  })
  @IsString()
  year: string;

  @IsNotEmpty()
  @IsString()
  length: string;

  @IsString()
  @Length(1, 500)
  storyline: string;

  @IsUrl()
  @IsNotEmpty()
  image: string;
}
