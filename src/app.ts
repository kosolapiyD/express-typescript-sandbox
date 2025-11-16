import express from 'express';
import routes from './routes';
import usersRoutes from './routes/users.route';
import { errorHandler } from './middlewares/error-handler';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);
app.use('/api/users', usersRoutes);

// Error handler
app.use(errorHandler);

export default app;
