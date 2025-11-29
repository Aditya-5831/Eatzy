import db from "../../lib/db.js"
import { AppError } from "../../middlewares/error-handler.middleware.js"
import type { AddCategoryDto } from "./dto/create-category.dto.js"
import type { UpdateCategoryDto } from "./dto/update-category.dto.js"

export const categoryService = {
    addCategoryToRestaurant: async (data: AddCategoryDto, restaurantId: string) => {
        const category = await db.category.create({
            data: {
                name: data.name,
                slug: data.slug,
                restaurant: {
                    connect: {
                        id: restaurantId
                    }
                }
            }
        })

        if (!category) {
            throw new AppError("Failed to create category", 400)
        }

        return category;
    },

    getAllCatgories: async () => {
        const categories = await db.category.findMany();

        return categories
    },

    updateCategory: async (data: UpdateCategoryDto, categoryId: string) => {
        const updatedCategory = await db.category.update({
            where: {
                id: categoryId
            },

            data
        })

        if (!updatedCategory) {
            throw new AppError("Failed to update category", 400)
        }

        return updatedCategory
    },

    removeCategoryFromRestaurant: async (restaurantId: string, categoryId: string) => {
        const removedCategory = await db.restaurant.update({
            where: {
                id: restaurantId
            },

            data: {
                categories: {
                    disconnect: {
                        id: categoryId
                    }
                }
            }

        })

        if (!removedCategory) {
            throw new AppError("Failed to remove category", 400)
        }

        return removedCategory
    }

}