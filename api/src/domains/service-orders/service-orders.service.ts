import { prisma } from '../../config/prismaClient';
import { Status } from '../../../generated/prisma/enums';

interface NewServiceOrder {
  clientId: number;
  deviceId: number;
  issue: string;
  status?: Status;
}

interface UpdateServiceOrder {
  issue?: string;
  status?: Status;
}

export class ServiceOrdersService {
  create = async (data: NewServiceOrder) => {
    const serviceOrder = await prisma.serviceOrder.create({ data });
    return serviceOrder;
  };

  getAll = async () => {
    const serviceOrders = await prisma.serviceOrder.findMany();
    return serviceOrders;
  };

  getById = async (id: number) => {
    const serviceOrder = await prisma.serviceOrder.findUnique({ where: { id } });
    return serviceOrder;
  };

  update = async (id: number, data: UpdateServiceOrder) => {
    try {
      const serviceOrder = await prisma.serviceOrder.update({ where: { id }, data });
      return serviceOrder;
    } catch {
      return undefined;
    }
  };

  delete = async (id: number) => {
    try {
      await prisma.serviceOrder.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  };
}