import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoruDTO,
} from "./ICategoriesRepository";

class PostgressCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoruDTO): void {
    console.log(name, description);
  }
}

export { PostgressCategoriesRepository };
