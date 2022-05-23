import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';
import { UsersRepository } from './implementarions/UsersRepository';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;

  findByName(name: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
