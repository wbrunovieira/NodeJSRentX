import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CreateCategoryController } from './CreateCategoryController';
// eslint-disable-next-line import/no-unresolved

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export { createCategoryController };
