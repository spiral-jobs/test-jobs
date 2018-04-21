import { IUser } from '../user/user.interface';

export interface ISession {
  user: IUser;
  token: string;
}
