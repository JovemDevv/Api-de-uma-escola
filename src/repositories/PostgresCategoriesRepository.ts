import { Category } from "../model/category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    // Lançar uma exceção ou retornar undefined se a categoria não for encontrada
    throw new Error("Categoria não encontrada.");
  }

  list(): Category[] {
    throw new Error("Categoria não encontrada.");
  }

  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
