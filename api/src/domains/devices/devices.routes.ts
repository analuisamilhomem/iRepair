import { Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { DevicesController } from './devices.controller';

const devicesRoutes = Router();
const devicesController = new DevicesController();

// Todas as rotas deste router exigem autenticação
devicesRoutes.use(authMiddleware);

devicesRoutes.post('/', devicesController.create);
devicesRoutes.get('/', devicesController.list);
devicesRoutes.get('/:id', devicesController.findById);
devicesRoutes.put('/:id', devicesController.update);
devicesRoutes.delete('/:id', devicesController.delete);

export { devicesRoutes };