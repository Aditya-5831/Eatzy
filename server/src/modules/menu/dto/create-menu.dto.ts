export type AddMenuDto = {
    menuCategories: MenuCategoriesDto[];
}

export type MenuCategoriesDto = {
    type: string;
    title: string;
    menuItems: MenuItemsDto[];

}

export type MenuItemsDto = {
    name: string;
    image: string;
    price: number;
    isVeg: boolean;
}