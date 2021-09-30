import {PrismaClient} from '@prisma/client';

interface User {
  id: string;
  name: string;
}

const exp: {
  prisma: PrismaClient,
  findAll: () => Promise<User[]>,
} = {

  prisma: undefined,

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users.map((user: any) => ({
      id: user.id,
      name: user.name,
    }));
  },
};
export default exp;
