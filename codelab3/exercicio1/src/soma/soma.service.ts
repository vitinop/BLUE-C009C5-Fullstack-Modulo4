import { Injectable } from '@nestjs/common';
import { NumerosDto } from './numeros.dto';

@Injectable()
export class SomaService {
    somarNumeros(numeros:NumerosDto): number {
        //outro de jeito de declarar :
         
        // const numero1 = numeros.numero1
        // const numero2 = numeros.numero2
        const {numero1,numero2} = numeros
        return numero1+numero2;
    }

}
