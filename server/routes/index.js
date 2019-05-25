import express from 'express';
import UserRoutes from './userRoutes';
import OrderRoutes from './orderRoutes';

const app = express();

app.use('/api/v1', UserRoutes);
app.use('/api/v1', OrderRoutes);

export default app;
