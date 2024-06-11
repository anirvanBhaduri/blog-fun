import path from 'path';
import express from 'express';
import { app } from './express';
import dotenv from 'dotenv';
import setupBlogRoutes from './blog/routes';

dotenv.config({ path: path.resolve(__dirname, '..', 'backend', '.env') });

const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname, 'public')));

setupBlogRoutes(app);

// this prevents listening to the port when running tests
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server successfully started at http://localhost:${PORT}`));
}

export { app };
