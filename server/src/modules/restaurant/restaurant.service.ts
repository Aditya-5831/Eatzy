import db from "../../lib/db.js"
import { AppError } from "../../middlewares/error-handler.middleware.js";
import type { CreateRestaurantDto } from "./dto/create-restaurant.dto.js";
import type { UpdateRestaurantDto } from "./dto/update-restaurant.dto.js";



export const restaurantService = {
    addRestaurant: async (data: CreateRestaurantDto) => {
        const restaurant = await db.restaurant.create({
            data
        })

        if (!restaurant) {
            throw new AppError("Failed to create restaurant", 400)
        }

        return restaurant
    },

    getAllRestaurants: async () => {
        const restaurants = await db.restaurant.findMany({
            include: {
                categories: true,
                openingHours: true,
                menu: {
                    include: {
                        menuCategories: {
                            include: {
                                menuItems: true
                            }
                        }
                    }
                }
            }
        });

        if (!restaurants) {
            throw new AppError("Restaurants not found", 404)
        }

        return restaurants
    },

    getAllRestaurantsByCategory: async (slug: string) => {
        const restaurants = await db.category.findUnique({
            where: {
                slug
            },

            select: {
                restaurant: {
                    select: {
                        name: true,
                        image: true,
                        rating: true
                    }
                }
            }
        })

        if (!restaurants) {
            throw new AppError("Restaurants not found", 404)
        }

        return restaurants
    },

    getSingleRestaurant: async (restaurantId: string) => {
        const restaurant = await db.restaurant.findUnique({
            where: {
                id: restaurantId
            },
            include: {
                categories: true,
                openingHours: true,
                menu: {
                    include: {
                        menuCategories: {
                            include: {
                                menuItems: true
                            }
                        }
                    }
                }
            }
        })

        if (!restaurant) {
            throw new AppError("Restaurant not found", 404)
        }

        return restaurant
    },

    updateRestaurant: async (restaurantId: string, data: UpdateRestaurantDto) => {
        const updatedRestaurant = await db.restaurant.update({
            where: {
                id: restaurantId!
            },
            data
        })

        if (!updatedRestaurant) {
            throw new AppError("Failed to update restaurant", 404)
        }

        return updatedRestaurant
    },

    deleteRestaurant: async (restaurantId: string) => {
        const deletedRestaurant = await db.restaurant.delete({
            where: {
                id: restaurantId!
            }
        })

        if (!deletedRestaurant) {
            throw new AppError("Failed to delete restaurant", 404)
        }

        return deletedRestaurant

    }
}