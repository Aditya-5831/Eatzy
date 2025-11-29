import { Router } from "express";
import { paramsValidator } from "../../middlewares/paramsValidator.middleware.js";
import { categoryController } from "./category.controller.js";

const router: Router = Router();

// Add category to restaurant
router.post("/:restaurantId", paramsValidator("restaurantId"), categoryController.addCategoryToRestaurant)

// Add category to restaurant
router.get("/", categoryController.getAllCategories)

// Add category to restaurant
router.put("/", paramsValidator("restaurantId"), categoryController.updateCategory)

// Add category to restaurant
router.put("/:restaurantId/:categoryId", paramsValidator("restaurantId"), paramsValidator("categoryId"), categoryController.removeCategoryFromRestaurant)


export default router;