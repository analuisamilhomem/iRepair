import { useEffect, useState } from 'react';
import { api } from '../services/api';
import type { Client, NewClient } from '../types/client';

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newClient, setNewClient] = useState<NewClient>({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await api.get('/clients');
        setClients(response.data);
      } catch (e) {
        setError('Não foi possível carregar os clientes.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchClients();
  }, []);

  function handleChange(event: any) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setNewClient({ ...newClient, [fieldName]: fieldValue });
  }

  async function handleDeleteClient(id: number) {
    try {
      await api.delete(`/clients/${id}`);
      setClients(clients.filter((client) => client.id !== id));
    } catch (e) {
      setError('Não foi possível remover o cliente.');
    }
  }

  async function handleCreateClient() {
    try {
      const response = await api.post('/clients', newClient);
      setClients([...clients, response.data]);
      setNewClient({ name: '', phone: '', email: '' });
    } catch (e) {
      setError('Não foi possível cadastrar o cliente.');
    }
  }

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Clientes</h1>

      <div>
        <input
          name="name"
          placeholder="Nome"
          value={newClient.name}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Telefone"
          value={newClient.phone}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={newClient.email}
          onChange={handleChange}
        />
        <button type="button" onClick={handleCreateClient}>
          Salvar
        </button>
      </div>

     <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.name} — {client.phone} — {client.email}
            <button type="button" onClick={() => handleDeleteClient(client.id)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;