import app from './app';
import { connectDB } from './config/db';

const port = process.env.PORT || 8080;

const start = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

start();
