import { Category } from "../model/Category";

interface ICreateCategoruDTO {
  name: string;
  description: string;
}
class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoruDTO): void {
    const category = new Category();

    Object.assign(category, {
      description,
      name,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
