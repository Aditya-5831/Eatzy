export const restaurants = [
    {
        id: "1",
        name: "Behrouz Biryani",
        rating: 4.3,
        ratingCount: 18452,
        deliveryTime: "32 min",
        distance: "4.2 km",
        categories: [
            { slug: "biryani", name: "Biryani" },
            { slug: "mughlai", name: "Mughlai" }
        ],
        price: "₹350 for two",
        isVeg: false,
        offer: "50% OFF up to ₹120",
        image: require("@/assets/images/restaurants/burger-king.jpg"),
        coverImage: "https://cdn.foodapp.com/images/covers/behrouz-biryani-cover.jpg",
        location: { latitude: 19.1234, longitude: 72.8356 },
        deliveryFee: { base: 29, distanceFee: 12, surge: 0, total: 41 },
        isOpen: true,
        openingHours: { open: "11:00 AM", close: "11:45 PM" },
        menu: {
            categories: [
                {
                    id: "c1",
                    type: "biryani",
                    title: "Best in Biryani",
                    items: [
                        { id: "i1", name: "Dum Gosht Biryani", price: 289, isVeg: false, image: "https://cdn.foodapp.com/images/menu/behrouz-gosht.jpg" },
                        { id: "i2", name: "Paneer Subz Biryani", price: 249, isVeg: true, image: "https://cdn.foodapp.com/images/menu/behrouz-paneer.jpg" },
                    ],
                },
                {
                    id: "c2",
                    type: "starter",
                    title: "Starters",
                    items: [
                        { id: "i3", name: "Chicken 65", price: 199, isVeg: false, image: "https://cdn.foodapp.com/images/menu/behrouz-chicken65.jpg" },
                        { id: "i4", name: "Paneer Tikka", price: 149, isVeg: true, image: "https://cdn.foodapp.com/images/menu/behrouz-paneer-tikka.jpg" },
                    ],
                },
                {
                    id: "c3",
                    type: "desserts",
                    title: "Desserts",
                    items: [
                        { id: "i5", name: "Gulab Jamun", price: 79, isVeg: true, image: "https://cdn.foodapp.com/images/menu/behrouz-gulabjamun.jpg" },
                    ],
                },
            ],
        },
    },
    {
        id: "2",
        name: "Burger King",
        rating: 4.1,
        ratingCount: 9532,
        deliveryTime: "24 min",
        distance: "2.1 km",
        categories: [
            { slug: "burger", name: "Burger" },
            { slug: "fast-food", name: "Fast Food" }
        ],
        price: "₹300 for two",
        isVeg: false,
        offer: "20% OFF",
        image: require("@/assets/images/restaurants/burger-king.jpg"),
        coverImage: "https://cdn.foodapp.com/images/covers/burger-king-cover.jpg",
        location: { latitude: 19.1352, longitude: 72.8421 },
        deliveryFee: { base: 29, distanceFee: 8, surge: 5, total: 42 },
        isOpen: true,
        openingHours: { open: "10:00 AM", close: "11:00 PM" },
        menu: {
            categories: [
                {
                    id: "c4",
                    type: "burger",
                    title: "Best in Burgers",
                    items: [
                        { id: "i6", name: "Whopper Jr.", price: 159, isVeg: false, image: "https://cdn.foodapp.com/images/menu/bk-whopper.jpg" },
                        { id: "i7", name: "Veg Crunch Burger", price: 79, isVeg: true, image: "https://cdn.foodapp.com/images/menu/bk-veg-crunch.jpg" },
                    ],
                },
                {
                    id: "c5",
                    type: "fries",
                    title: "Fries & Sides",
                    items: [
                        { id: "i8", name: "Cheese Fries", price: 99, isVeg: true, image: "https://cdn.foodapp.com/images/menu/bk-cheesefries.jpg" },
                        { id: "i9", name: "Chicken Nuggets", price: 129, isVeg: false, image: "https://cdn.foodapp.com/images/menu/bk-nuggets.jpg" },
                    ],
                },
                {
                    id: "c6",
                    type: "drinks",
                    title: "Drinks",
                    items: [
                        { id: "i10", name: "Coke", price: 49, isVeg: true, image: "https://cdn.foodapp.com/images/menu/bk-coke.jpg" },
                    ],
                },
            ],
        },
    },
    {
        id: "3",
        name: "Domino's Pizza",
        rating: 4.0,
        ratingCount: 22104,
        deliveryTime: "28 min",
        distance: "3.8 km",
        categories: [
            { slug: "pizza", name: "Pizza" },
            { slug: "italian", name: "Italian" }
        ],
        price: "₹400 for two",
        isVeg: false,
        offer: "₹150 OFF above ₹399",
        image: require("@/assets/images/restaurants/burger-king.jpg"),
        coverImage: "https://cdn.foodapp.com/images/covers/dominos-cover.jpg",
        location: { latitude: 19.1291, longitude: 72.8301 },
        deliveryFee: { base: 29, distanceFee: 15, surge: 0, total: 44 },
        isOpen: true,
        openingHours: { open: "10:30 AM", close: "11:55 PM" },
        menu: {
            categories: [
                {
                    id: "c7",
                    type: "pizza",
                    title: "Best in Pizza's",
                    items: [
                        { id: "i11", name: "Farmhouse Pizza", price: 459, isVeg: true, image: "https://cdn.foodapp.com/images/menu/dominos-farmhouse.jpg" },
                        { id: "i12", name: "Peppy Paneer Pizza", price: 399, isVeg: true, image: "https://cdn.foodapp.com/images/menu/dominos-peppy-paneer.jpg" },
                    ],
                },
                {
                    id: "c8",
                    type: "starter",
                    title: "Starters",
                    items: [
                        { id: "i13", name: "Garlic Bread", price: 129, isVeg: true, image: "https://cdn.foodapp.com/images/menu/dominos-garlicbread.jpg" },
                    ],
                },
                {
                    id: "c9",
                    type: "drinks",
                    title: "Drinks",
                    items: [
                        { id: "i14", name: "Pepsi", price: 49, isVeg: true, image: "https://cdn.foodapp.com/images/menu/dominos-pepsi.jpg" },
                    ],
                },
            ],
        },
    },
    {
        id: "4",
        name: "Kwality Walls",
        rating: 4.4,
        ratingCount: 8434,
        deliveryTime: "16 min",
        distance: "1.4 km",
        categories: [
            { slug: "ice-cream", name: "Ice Cream" },
            { slug: "desserts", name: "Desserts" }
        ],
        price: "₹200 for two",
        isVeg: true,
        offer: "Buy 1 Get 1 Free",
        image: require("@/assets/images/restaurants/burger-king.jpg"),
        coverImage: "https://cdn.foodapp.com/images/covers/kwality-walls-cover.jpg",
        location: { latitude: 19.1403, longitude: 72.8458 },
        deliveryFee: { base: 0, distanceFee: 5, surge: 0, total: 5 },
        isOpen: true,
        openingHours: { open: "09:00 AM", close: "11:15 PM" },
        menu: {
            categories: [
                {
                    id: "c10",
                    type: "ice-cream",
                    title: "Best in Ice Creams",
                    items: [
                        { id: "i15", name: "Cornetto Double Chocolate", price: 45, isVeg: true, image: "https://cdn.foodapp.com/images/menu/kw-cornetto.jpg" },
                        { id: "i16", name: "Vanilla Cone", price: 35, isVeg: true, image: "https://cdn.foodapp.com/images/menu/kw-vanilla-cone.jpg" },
                    ],
                },
                {
                    id: "c11",
                    type: "desserts",
                    title: "Desserts",
                    items: [
                        { id: "i17", name: "Brownie", price: 79, isVeg: true, image: "https://cdn.foodapp.com/images/menu/kw-brownie.jpg" },
                    ],
                },
                {
                    id: "c12",
                    type: "drinks",
                    title: "Beverages",
                    items: [
                        { id: "i18", name: "Milkshake", price: 99, isVeg: true, image: "https://cdn.foodapp.com/images/menu/kw-milkshake.jpg" },
                    ],
                },
            ],
        },
    },
    {
        id: "5",
        name: "The Belgian Waffle",
        rating: 4.5,
        ratingCount: 11324,
        deliveryTime: "22 min",
        distance: "2.8 km",
        categories: [
            { slug: "waffles", name: "Waffles" },
            { slug: "desserts", name: "Desserts" }
        ],
        price: "₹250 for two",
        isVeg: true,
        offer: "40% OFF",
        image: require("@/assets/images/restaurants/burger-king.jpg"),
        coverImage: "https://cdn.foodapp.com/images/covers/belgian-waffle-cover.jpg",
        location: { latitude: 19.1381, longitude: 72.8380 },
        deliveryFee: { base: 19, distanceFee: 10, surge: 0, total: 29 },
        isOpen: true,
        openingHours: { open: "10:00 AM", close: "12:00 AM" },
        menu: {
            categories: [
                {
                    id: "c13",
                    type: "waffles",
                    title: "Best in Waffles",
                    items: [
                        { id: "i19", name: "Nutella Waffle", price: 149, isVeg: true, image: "https://cdn.foodapp.com/images/menu/waffle-nutella.jpg" },
                        { id: "i20", name: "Strawberry Waffle", price: 159, isVeg: true, image: "https://cdn.foodapp.com/images/menu/waffle-strawberry.jpg" },
                    ],
                },
                {
                    id: "c14",
                    type: "desserts",
                    title: "Desserts",
                    items: [
                        { id: "i21", name: "Chocolate Brownie", price: 99, isVeg: true, image: "https://cdn.foodapp.com/images/menu/waffle-brownie.jpg" },
                    ],
                },
                {
                    id: "c15",
                    type: "drinks",
                    title: "Beverages",
                    items: [
                        { id: "i22", name: "Hot Chocolate", price: 89, isVeg: true, image: "https://cdn.foodapp.com/images/menu/waffle-hotchocolate.jpg" },
                    ],
                },
            ],
        },
    },
];
