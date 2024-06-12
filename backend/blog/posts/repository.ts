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
    const posts = await db.get<Post[]>(`SELECT ${blogColumns.join(',')} FROM posts`);
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
