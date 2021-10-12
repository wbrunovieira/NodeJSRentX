import { Category } from "../model/Category";

interface ICreateCategoruDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoruDTO): void;
}

export { ICategoriesRepository, ICreateCategoruDTO };
