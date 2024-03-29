import { z } from "zod";
import { categorySchema, createCategorySchema, returnAllCategoriesSchema, returnCategoryRealStateSchema } from "../schemas/categories.schema";

export type TCategory = z.infer<typeof createCategorySchema>

export type TReturnCategory = z.infer<typeof categorySchema>

export type TReturnAllCategories = z.infer<typeof returnAllCategoriesSchema>

export type TReturnCategoryRealEstate = z.infer<typeof returnCategoryRealStateSchema>