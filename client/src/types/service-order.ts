export type Status = 'open' | 'in_progress' | 'done';

export interface ServiceOrder {
  id: number;
  clientId: number;
  deviceId: number;
  issue: string;
  status: Status;
  createdAt: string;
}

export interface NewServiceOrder {
  clientId: number;
  deviceId: number;
  issue: string;
  status?: Status;
}