import { Injectable } from '@nestjs/common';
import { AlunoDto } from './aluno.dto';

//receber dto
//fazer media
//retornar uma string coma media e se está aprovado ou reprovado

 
@Injectable()
export class AlunoService {
  calculoMediaNota(
    nota1: number,
    nota2: number,
    nota3: number,
    nota4: number,
  ): { media: number; statusAprovacao: boolean } {
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    if (media >= 7) {
      return { media: media, statusAprovacao: true };
    } else return { media: media, statusAprovacao: false };
  }


  verificarStatusAluno(dadosAluno: AlunoDto):string {
      const{
          nome,
          dia_nascimento,
          mes_nascimento,
          ano_nascimento,
          nota1,
          nota2,
          nota3,
          nota4,
      } =dadosAluno

      const{media, statusAprovacao} = this.calculoMediaNota(nota1,nota2,nota3,nota4);
      const status = statusAprovacao ===true ? 'aprovado' : 'reprovado';
      
      return `O Aluno ${nome},nascido em ${dia_nascimento}/${mes_nascimento}/${ano_nascimento}, atingindo a média ${media} de pontos, e está ${status} `
  }


}
