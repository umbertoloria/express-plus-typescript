import {PrismaClient} from '@prisma/client';
import User from '../../interface/user';

export default (prisma: PrismaClient) => ({

  findAll: (): Promise<User[]> => prisma.user.findMany(),

});
