import { Controller, Post, Body} from '@nestjs/common';
import { NumerosDto } from './numeros.dto';
import {SomaService} from './soma.service'

@Controller('soma')
export class SomaController {
    constructor(private service: SomaService){}

    @Post()
    realizarSoma(@Body() numeros: NumerosDto): number {
        return this.service.somarNumeros(numeros); 
    }
}
 