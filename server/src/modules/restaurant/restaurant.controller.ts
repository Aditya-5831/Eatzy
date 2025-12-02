import type { NextFunction, Request, Response } from "express";
import { restaurantService } from "./restaurant.service.js";
import type { CreateRestaurantDto } from "./dto/create-restaurant.dto.js";

export const restaurantController = {
    addRestaurant: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: CreateRestaurantDto = req.body

            const restaurant = await restaurantService.addRestaurant(data)

            return res.status(201).json({
                success: true,
                message: "Restaurant created successfully",
                data: restaurant
            })

        } catch (error) {
            next(error)
        }
    },

    getAllRestaurants: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const restaurants = await restaurantService.getAllRestaurants();

            return res.status(200).json({
                success: true,
                message: "All restaurants fetched successfully",
                data: restaurants
            })

        } catch (error) {
            next(error)
        }
    },

    getAllRestaurantsByCategory: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const slug = req.params.slug as string

            const restaurants = await restaurantService.getAllRestaurantsByCategory(slug)

            return res.status(200).json({
                success: true,
                message: "All restaurants fetched successfully",
                data: restaurants
            })

        } catch (error) {
            next(error)
        }
    },

    getSingleRestaurant: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const restaurantId = req.params.restaurantId as string

            const restaurant = await restaurantService.getSingleRestaurant(restaurantId);



            return res.status(200).json({
                success: true,
                message: "Restaurant fetched successfully",
                data: restaurant
            })

        } catch (error) {
            next(error)
        }
    },

    updateRestaurant: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            const restaurantId = req.params.restaurantId as string

            const updatedRestaurant = await restaurantService.updateRestaurant(restaurantId, data)

            return res.status(200).json({
                success: true,
                message: "Restaurant updated successfully",
                data: updatedRestaurant
            })

        } catch (error) {
            next(error)
        }
    },

    deleteRestaurant: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const restaurantId = req.params.restaurantId as string

            const deletedRestaurant = await restaurantService.deleteRestaurant(restaurantId)

            return res.status(200).json({
                success: true,
                message: "Restaurant deleted successfully",
                data: deletedRestaurant
            })

        } catch (error) {
            next(error)
        }
    }

}