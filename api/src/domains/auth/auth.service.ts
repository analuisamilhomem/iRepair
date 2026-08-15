import bcrypt from 'bcrypt';
import { prisma } from '../../config/prismaClient';
import { generateToken } from '../../utils/token';
import { AppError } from '../../utils/AppError';

const SALT_ROUNDS = 10;

export class AuthService {
  async register(email: string, password: string) {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      throw new AppError('Email já cadastrado', 409);
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: { email, password: passwordHash },
      select: { id: true, email: true }, // nunca retorne o hash da senha
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      // Mensagem genérica: não revela se o email existe ou não
      throw new AppError('Credenciais inválidas', 401);
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      throw new AppError('Credenciais inválidas', 401);
    }

    const token = generateToken({ id: user.id, email: user.email });

    return { token, user: { id: user.id, email: user.email } };
  }
}