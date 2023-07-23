import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PropertyInterface {
  id?: string;
  listing: string;
  status: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PropertyGetQueryInterface extends GetQueryInterface {
  id?: string;
  listing?: string;
  status?: string;
  user_id?: string;
}
