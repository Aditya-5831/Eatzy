import type { AddCategoryDto } from "../../category/dto/create-category.dto.js";
import type { AddMenuDto } from "../../menu/dto/create-menu.dto.js";

export type CreateRestaurantDto = {
    name: string;
    image: string;
    coverImage: string;
    latitude: number;
    longitude: number;
    categories: AddCategoryDto[];
    menu: AddMenuDto[]
}

