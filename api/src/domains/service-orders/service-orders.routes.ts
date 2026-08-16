import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { ServiceOrdersController } from './service-orders.controller';

const serviceOrdersRoutes = Router();
const serviceOrdersController = new ServiceOrdersController();

// Todas as rotas deste router exigem autenticação
serviceOrdersRoutes.use(authMiddleware);

serviceOrdersRoutes.post('/', serviceOrdersController.create);
serviceOrdersRoutes.get('/', serviceOrdersController.list);
serviceOrdersRoutes.get('/:id', serviceOrdersController.findById);
serviceOrdersRoutes.put('/:id', serviceOrdersController.update);
serviceOrdersRoutes.delete('/:id', serviceOrdersController.delete);

export { serviceOrdersRoutes };