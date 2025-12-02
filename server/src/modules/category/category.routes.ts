import { Router } from "express";
import { paramsValidator } from "../../middlewares/paramsValidator.middleware.js";
import { categoryController } from "./category.controller.js";

const router: Router = Router();

// Add category
router.post("/:restaurantId", paramsValidator("restaurantId"), categoryController.addCategories)

// Get all categories
router.get("/", categoryController.getAllCategories)

// Update category
router.put("/", paramsValidator("restaurantId"), categoryController.updateCategory)

// Delete category
router.put("/:restaurantId/:categoryId", paramsValidator("restaurantId"), paramsValidator("categoryId"), categoryController.removeCategoryFromRestaurant)


export default router;