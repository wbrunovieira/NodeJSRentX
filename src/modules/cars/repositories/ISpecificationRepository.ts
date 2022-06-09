import { Category } from '../infra/typeorm/entities/Category';
import { Specification } from '../infra/typeorm/entities/Specification';
import { ICreateCategoruDTO } from './ICategoriesRepository';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
