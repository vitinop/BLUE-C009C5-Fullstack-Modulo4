import { INestApplication, Injectable, ConflictException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './enum/role.enum';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello Dev!';
  }
}

