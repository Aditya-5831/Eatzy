import { Router } from "express";
import { paramsValidator } from "../../middlewares/paramsValidator.middleware.js";
import { restaurantController } from "./restaurant.controller.js";

const router: Router = Router();

// Add restaurant
router.post("/", restaurantController.addRestaurant)

// Get all restaurants
router.get("/", restaurantController.getAllRestaurants)

// Get all restaurants by category
router.get("/:slug", paramsValidator("slug"), restaurantController.getAllRestaurantsByCategory)

// Get single restaurant
router.get("/:restaurantId", paramsValidator("restaurantId"), restaurantController.getSingleRestaurant)

// Update restaurant
router.put("/:restaurantId", paramsValidator("restaurantId"), restaurantController.updateRestaurant)

// Delete restaurant
router.delete("/:restaurantId", paramsValidator("restaurantId"), restaurantController.deleteRestaurant)

export default router