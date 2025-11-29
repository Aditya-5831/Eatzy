import type { NextFunction, Request, Response } from "express";
import { categoryService } from "./category.service.js";

export const categoryController = {
    addCategoryToRestaurant: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            const restaurantId = req.params.restaurantId as string

            const category = await categoryService.addCategoryToRestaurant(data, restaurantId)

            return res.status(201).json({
                success: true,
                message: "Catgory created successfully",
                category
            })

        } catch (error) {
            next(error)
        }
    },

    getAllCategories: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categories = await categoryService.getAllCatgories()

            return res.status(201).json({
                success: true,
                message: "Categories fetched successfully",
                categories
            })

        } catch (error) {
            next(error)
        }
    },

    updateCategory: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            const restaurantId = req.params.restaurantId as string

            const category = await categoryService.updateCategory(data, restaurantId)

            return res.status(201).json({
                success: true,
                message: "Catgory updated successfully",
                category
            })

        } catch (error) {
            next(error)
        }
    },

    removeCategoryFromRestaurant: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const restaurantId = req.params.restaurantId as string
            const categoryId = req.params.categoryId as string

            const category = await categoryService.removeCategoryFromRestaurant(restaurantId, categoryId)

            return res.status(201).json({
                success: true,
                message: "Catgory removed successfully",
                category
            })

        } catch (error) {
            next(error)
        }
    },
}