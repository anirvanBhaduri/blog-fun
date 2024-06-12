import express, { Express } from 'express';
import { getRoutes as getPostRoutes } from './posts/routes';

const setupRoutes = (app: Express) => {
  const router = express.Router();
  router.use('/posts', getPostRoutes());
  app.use('/blog', router);
};

export default setupRoutes;
