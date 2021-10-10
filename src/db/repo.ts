import {PrismaClient} from '@prisma/client';
import UserRepo from './repository/user-repo';

const prisma = new PrismaClient();
const userRepo = UserRepo(prisma);

export {
  userRepo,
};
