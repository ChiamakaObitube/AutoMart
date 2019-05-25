import express from 'express';
import UserRoutes from './userRoutes';

const app = express();

app.use('/api/v1', UserRoutes);

export default app;
