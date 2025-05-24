import { v4 as uuidv4 } from 'uuid';

export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: 'admin' | 'teacher' | 'student';
  avatar_url?: string;
};

export const users: User[] = [
  {
    id: '1',
    email: 'admin@schoolsync.com',
    first_name: 'Admin',
    last_name: 'User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'teacher1@schoolsync.com',
    first_name: 'John',
    last_name: 'Smith',
    role: 'teacher',
  },
  {
    id: '3',
    email: 'student1@schoolsync.com',
    first_name: 'Michael',
    last_name: 'Brown',
    role: 'student',
  },
];

export const findUser = (email: string, password: string): User | null => {
  return users.find(user => user.email === email) || null;
};

export const createUser = (userData: Omit<User, 'id'>): User => {
  const newUser = {
    id: uuidv4(),
    ...userData,
  };
  users.push(newUser);
  return newUser;
};