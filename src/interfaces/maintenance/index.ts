import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MaintenanceInterface {
  id?: string;
  record: string;
  status: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MaintenanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  record?: string;
  status?: string;
  user_id?: string;
}
