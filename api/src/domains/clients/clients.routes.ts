import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { ClientsController } from './clients.controller';

const clientsRoutes = Router();
const clientsController = new ClientsController();

// Todas as rotas deste router exigem autenticação
clientsRoutes.use(authMiddleware);

clientsRoutes.post('/', clientsController.create);
clientsRoutes.get('/', clientsController.list);
clientsRoutes.get('/:id', clientsController.findById);
clientsRoutes.put('/:id', clientsController.update);
clientsRoutes.delete('/:id', clientsController.delete);

export { clientsRoutes };