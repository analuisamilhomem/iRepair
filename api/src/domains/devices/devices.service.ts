import { prisma } from '../../config/prismaClient';

interface NewDevice {
  model: string;
  clientId: number;
}

interface UpdateDevice {
  model?: string;
}

export class DevicesService {
  create = async (data: NewDevice) => {
    const device = await prisma.device.create({ data });
    return device;
  };

  getAll = async () => {
    const devices = await prisma.device.findMany();
    return devices;
  };

  getById = async (id: number) => {
    const device = await prisma.device.findUnique({ where: { id } });
    return device;
  };

  update = async (id: number, data: UpdateDevice) => {
    try {
      const device = await prisma.device.update({ where: { id }, data });
      return device;
    } catch {
      return undefined;
    }
  };

  delete = async (id: number) => {
    try {
      await prisma.device.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  };
}