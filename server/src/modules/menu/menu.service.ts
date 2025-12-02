import db from "../../lib/db.js";
import { AppError } from "../../middlewares/error-handler.middleware.js";
import type { MenuCategoriesDto } from "./dto/create-menu.dto.js";

export const menuService = {
    addMenuCategorie: async (data: MenuCategoriesDto, menuId: string) => {
        const menuCategory = await db.menuCategory.create({
            data: {
                title: data.title,
                type: data.type,
                menuItems: {
                    create: data.menuItems.map((item) => ({
                        image: item.image,
                        isVeg: item.isVeg,
                        name: item.name,
                        price: item.price,
                    })),
                },
                menu: {
                    connect: {
                        id: menuId,
                    },
                },
            },
        });

        if (!menuCategory) {
            throw new AppError("Failed to create menuCategory", 400);
        }

        return menuCategory;
    },

};
