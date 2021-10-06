import { request, response, Router } from "express";
import { v4 as uuidv4 } from "uuid";

import { Category } from "../../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { description, name } = request.body;

  const category = new Category();

  Object.assign(category, {
    description,
    name,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRoutes };
