import { Request, Response } from 'express';
import { DevicesService } from './devices.service';

const devicesService = new DevicesService();

export class DevicesController {
  create = async (req: Request, res: Response) => {
    const { model, clientId } = req.body;
    const device = await devicesService.create({ model, clientId });
    return res.status(201).json(device);
  };

  list = async (req: Request, res: Response) => {
    const devices = await devicesService.getAll();
    return res.status(200).json(devices);
  };

  findById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const device = await devicesService.getById(id);

    if (!device) {
      return res.status(404).json({ error: 'Dispositivo não encontrado' });
    }

    return res.status(200).json(device);
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { model } = req.body;
    const device = await devicesService.update(id, { model });

    if (!device) {
      return res.status(404).json({ error: 'Dispositivo não encontrado' });
    }

    return res.status(200).json(device);
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deleted = await devicesService.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Dispositivo não encontrado' });
    }

    return res.status(204).send();
  };
}