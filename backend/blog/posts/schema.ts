export const PostSchema = `
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    tags TEXT
  )
`;

export type Post = {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  author_id: number;
  content: string;
  tags: string[];
};

export type PostColumn = keyof Post;
