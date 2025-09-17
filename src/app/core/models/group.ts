import {User} from './user.js';

export interface Group {
  _id: string;
  name: string;
  user: User;
  group?: Group;
}