import { Request, Response } from 'express';
import { ServiceOrdersService } from './service-orders.service';

const serviceOrdersService = new ServiceOrdersService();

export class ServiceOrdersController {
  create = async (req: Request, res: Response) => {
    const { clientId, deviceId, issue, status } = req.body;
    const serviceOrder = await serviceOrdersService.create({ clientId, deviceId, issue, status });
    return res.status(201).json(serviceOrder);
  };

  list = async (req: Request, res: Response) => {
    const serviceOrders = await serviceOrdersService.getAll();
    return res.status(200).json(serviceOrders);
  };

  findById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const serviceOrder = await serviceOrdersService.getById(id);

    if (!serviceOrder) {
      return res.status(404).json({ error: 'Ordem de serviço não encontrada' });
    }

    return res.status(200).json(serviceOrder);
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { issue, status } = req.body;
    const serviceOrder = await serviceOrdersService.update(id, { issue, status });

    if (!serviceOrder) {
      return res.status(404).json({ error: 'Ordem de serviço não encontrada' });
    }

    return res.status(200).json(serviceOrder);
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deleted = await serviceOrdersService.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Ordem de serviço não encontrada' });
    }

    return res.status(204).send();
  };
}