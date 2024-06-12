import path from 'path';
import express from 'express';
import { app } from './express';
import dotenv from 'dotenv';
import setupBlogRoutes from './blog/routes';
import { setupDb } from './db/db';
import { PostSchema } from './blog/posts/schema';

dotenv.config({ path: path.resolve(__dirname, '..', 'backend', '.env') });

const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

setupDb([PostSchema]);
setupBlogRoutes(app);

// this prevents listening to the port when running tests
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server successfully started at http://localhost:${PORT}`);
  });
}

export { app };
