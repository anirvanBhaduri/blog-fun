import express, { Express } from 'express';
import { getRoutes as getPostRoutes } from './posts';
import { getRouters as getAuthorRoutes } from './authors';

const setupRoutes = (app: Express) => {
  const router = express.Router();
  router.use('/posts', getPostRoutes());
  router.use('/authors', getAuthorRoutes());
  app.use('/blog', router);
};

export default setupRoutes;
