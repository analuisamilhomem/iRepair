import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainee.fidelis.workers.dev/api',
  headers: {
    Authorization: 'Bearer cfc5234f-56be-4a91-924c-de33dfcc9e1a',
  },
});