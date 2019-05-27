import express from 'express';
import UserRoutes from './userRoutes';
import OrderRoutes from './orderRoutes';
import CarRoutes from './carRoutes';

const app = express();

app.use('/api/v1', UserRoutes);
app.use('/api/v1', OrderRoutes);
app.use('/api/v1', CarRoutes);

export default app;
