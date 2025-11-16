import express from 'express';
import routes from './routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

// Error handler
app.use(errorHandler);

export default app;
