import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authRoutes } from '../domains/auth/auth.routes';
import { clientsRoutes } from '../domains/clients/clients.routes';
import { devicesRoutes } from '../domains/devices/devices.routes';
import { errorHandler } from '../middlewares/errorHandler';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/clients', clientsRoutes);
app.use('/devices', devicesRoutes);

app.use(errorHandler);

export { app };