import express from 'express';
import routes from './routes/index';

import { errorHandler } from './middlewares/error-handler';
import { logger } from './middlewares/logger';
import { notFound } from './middlewares/not-found';

import cookieParser from 'cookie-parser';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('my-secret-key'));

// register logger middleware
app.use(logger);

// Routes
app.use('/', routes);

// Error handler
app.use(notFound);
app.use(errorHandler);

export default app;
