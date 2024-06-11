import express, { Router, Request, Response } from 'express';

export const getRouters = (): Router => {
  const authorsRouter = express.Router();

  authorsRouter.get('/', (req: Request, res: Response) => {
    return res.json({
      someAuthors: 'hello',
    });
  });

  return authorsRouter;
};
