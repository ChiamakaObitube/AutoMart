import express from 'express';
import UserRoutes from './userRoutes';
import OrderRoutes from './orderRoutes';
import CarRoutes from './carRoutes';
import FlagRoutes from './flagRoutes';

const app = express();

app.use('/api/v2', UserRoutes);
app.use('/api/v2', OrderRoutes);
app.use('/api/v2', CarRoutes);
app.use('/api/v2', FlagRoutes);

// app.use((req, res, next) => {
//   const error = new Error('4 Oh Not found');
//   error.status = 404;
//   next(error);
// });


// app.use((error, req, res) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });
export default app;
