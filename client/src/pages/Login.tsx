import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    setError(null);
    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (e) {
      setError('Email ou senha inválidos.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-[#0d5c63] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md px-8 py-10 w-80">
        <h1 className="text-2xl font-bold mb-6">Entrar</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border rounded px-4 py-2 w-full mb-3"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="border rounded px-4 py-2 w-full mb-3"
        />

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-green-500 border border-green-700 text-white px-4 py-2 rounded w-full"
        >
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </button>
      </div>
    </div>
  );
};

export default Login;