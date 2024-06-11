import express, { Router, Request, Response } from 'express';

export const getRoutes = (): Router => {
  const postsRouter = express.Router();

  postsRouter.get('/', (req: Request, res: Response) => {
    return res.json({
      somePosts: 'hello',
    });
  });

  return postsRouter;
};
