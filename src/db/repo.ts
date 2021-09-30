import {PrismaClient} from '@prisma/client';
import userRepo from './repository/user-repo';

const prisma = new PrismaClient();
userRepo.prisma = prisma;

export {userRepo};
