import { Category } from '../entities/Category';

interface ICreateCategoruDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoruDTO): Promise<void> | undefined;
}

export { ICategoriesRepository, ICreateCategoruDTO };
