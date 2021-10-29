import { Injectable, ConflictException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Dev!';
  }
}
