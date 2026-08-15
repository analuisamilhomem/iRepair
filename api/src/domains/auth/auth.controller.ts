import { Request, Response } from 'express';
import { AuthService } from './auth.service';

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await authService.register(email, password);
    return res.status(201).json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const { token, user } = await authService.login(email, password);

    // Setando o cookie httpOnly
    res.cookie('token', token, {
      httpOnly: true, // JavaScript não consegue ler este cookie
      secure: false, // true em produção (exige HTTPS)
      sameSite: 'lax', // 'strict' em produção
      maxAge: 60 * 60 * 1000, // 1 hora em milissegundos — mantenha igual ao JWT_EXPIRES_IN do .env
    });

    return res.status(200).json({ user });
  }

  async logout(req: Request, res: Response) {
    // "Limpar" o cookie é setar um novo com maxAge: 0
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logout realizado com sucesso' });
  }

  async me(req: Request, res: Response) {
    return res.status(200).json({ user: req.user });
  }
}