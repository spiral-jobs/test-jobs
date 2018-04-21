import { IUser } from './user.interface';

export interface IUserNew extends IUser {
  password: string;
  confirmation: string;
}
