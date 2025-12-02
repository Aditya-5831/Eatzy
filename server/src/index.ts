import express from 'express';
import restaurantRoutes from './modules/restaurant/restaurant.routes.js'
import categoryRoutes from './modules/category/category.routes.js'
import { errorHandler } from './middlewares/error-handler.middleware.js';

// Configuration
const app = express();

app.use(express.json());

// Routes
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/category", categoryRoutes);


// Error middleware
app.use(errorHandler);

app.listen(5000, () => console.log(`Server listening to the port 5000`))