import express from 'express';
// import homeRouter from './routes/home.route';
// import usersRouter from './routes/users.route';
import routes from './routes/index';

import { errorHandler } from './middlewares/error-handler';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);
// app.use('/', homeRouter);
// app.use('/api/users', usersRouter);

// Error handler
app.use(errorHandler);

export default app;
