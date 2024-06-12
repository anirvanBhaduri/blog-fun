/**
 * TODO: There is currently no error handling in place.
 * This is a very quick setup of a backend hence, I've ignored
 * error handling for now. We will only ever hit the "happy path".
 */

import { Post, PostColumn } from './schema';
import { getDb } from '../../db/db';

export type PostRepository = {
  getAllPosts: () => Promise<Post[]>;
  createPost: (data: Pick<Post, 'title' | 'content' | 'tags'>) => Promise<number>;
};

export class SqlitePostRepository implements PostRepository {
  public async getAllPosts(): Promise<Post[]> {
    const db = await getDb();
    const blogColumns: PostColumn[] = ['id', 'title', 'content', 'tags', 'created_at'];

    // TODO: should definitely have a limit and offset or use primary key scrolling
    // this here is very simple and only in place for the frontend to flourish
    const posts = await db.all<Post[]>(`SELECT ${blogColumns.join(',')} FROM posts`);
    return posts || [];
  }

  public async createPost(data: Pick<Post, 'title' | 'content' | 'tags'>): Promise<number> {
    const db = await getDb();
    const createdAt = new Date().toISOString();
    const post = await db.run(
      `INSERT INTO posts (title, content, tags, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`,
      [data.title, data.content, data.tags.join('::'), createdAt, createdAt]
    );
    return post.lastID;
  }
}
