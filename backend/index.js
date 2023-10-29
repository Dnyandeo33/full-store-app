import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { urlencoded } from 'express';

import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';

// configure env
dotenv.config();
const PORT = process.env.PORT || 3006;

// initialize express
const app = express();

// cors platform
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
);

// parse the body
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use(userRoutes);
app.use(productRoutes);

// page not found route
app.use('*', (req, res) => {
    res.status(404).json({
        title: `Page not found`,
        message: `Page doesn't exist`
    });
});

// server running
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
