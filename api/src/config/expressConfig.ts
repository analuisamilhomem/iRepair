import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authRoutes } from '../domains/auth/auth.routes';
import { errorHandler } from '../middlewares/errorHandler';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', // origem exata do seu front-end
    credentials: true, // OBRIGATÓRIO para enviar/receber cookies
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRoutes);

// Middleware de erro: precisa ser o ÚLTIMO app.use(), depois de todas as rotas
app.use(errorHandler);

export { app };