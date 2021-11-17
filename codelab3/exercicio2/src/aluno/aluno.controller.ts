import { Controller,Body,Post } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoDto } from './aluno.dto';

@Controller('aluno')
export class AlunoController {
    constructor(private service: AlunoService){
    }

    @Post()
    verificarAluno(@Body dados: AlunoDto):string{
        return this.service.verificarStatusAluno(dados)
    }

}
