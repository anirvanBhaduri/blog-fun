import express, { Router, RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import { PostRepository, SqlitePostRepository } from './repository';

export const getRoutes = (): Router => {
  const postsRouter = express.Router();
  const postRepo = new SqlitePostRepository();

  postsRouter.get('/', asyncHandler(getAllPostsHandler(postRepo)));
  postsRouter.post('/', asyncHandler(createPostHandler(postRepo)));

  return postsRouter;
};

const getAllPostsHandler = (postRepo: PostRepository): RequestHandler => {
  return async (_, res) => {
    const posts = await postRepo.getAllPosts();
    res.json({
      posts,
    });
  };
};

const createPostHandler = (postRepo: PostRepository): RequestHandler => {
  return async (req, res) => {
    const postBody = req.body;
    const createdId = await postRepo.createPost(postBody);

    res.json({
      post_id: createdId,
    });
  };
};
