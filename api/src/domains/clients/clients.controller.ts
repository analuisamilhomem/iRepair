import { Request, Response } from 'express';
import { ClientsService } from './clients.service';

const clientsService = new ClientsService();

export class ClientsController {
  create = async (req: Request, res: Response) => {
    const { name, phone, email } = req.body;
    const client = await clientsService.create({ name, phone, email });
    return res.status(201).json(client);
  };

  list = async (req: Request, res: Response) => {
    const clients = await clientsService.getAll();
    return res.status(200).json(clients);
  };

  findById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const client = await clientsService.getById(id);

    if (!client) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    return res.status(200).json(client);
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name, phone, email } = req.body;
    const client = await clientsService.update(id, { name, phone, email });

    if (!client) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    return res.status(200).json(client);
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deleted = await clientsService.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    return res.status(204).send();
  };
}