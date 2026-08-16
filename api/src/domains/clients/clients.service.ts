import { prisma } from '../../config/prismaClient';

interface NewClient {
  name: string;
  phone: string;
  email: string;
}

interface UpdateClient {
  name?: string;
  phone?: string;
  email?: string;
}

export class ClientsService {
  create = async (data: NewClient) => {
    const client = await prisma.client.create({ data });
    return client;
  };

  getAll = async () => {
    const clients = await prisma.client.findMany();
    return clients;
  };

  getById = async (id: number) => {
    const client = await prisma.client.findUnique({ where: { id } });
    return client;
  };

  update = async (id: number, data: UpdateClient) => {
    try {
      const client = await prisma.client.update({ where: { id }, data });
      return client;
    } catch {
      return undefined;
    }
  };

  delete = async (id: number) => {
    try {
      await prisma.client.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  };
}