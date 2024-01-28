import { Category } from "../model/category";

interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export { ICategoriesRepository, ICreateCategoryDTO };
