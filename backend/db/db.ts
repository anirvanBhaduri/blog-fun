import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';
import path from 'path';

let db: Database<sqlite3.Database, sqlite3.Statement>;

export const getDb = async () => {
  if (!db) {
    db = await open({
      filename: path.resolve(__dirname, '..', process.env.DB_FILE_PATH),
      driver: sqlite3.Database,
    });
  }

  return db;
};

export const setupDb = async (schemas: string[]) => {
  try {
    const db = await getDb();

    for (let schema of schemas) {
      await db.exec(schema);
    }

    console.log('Schemas successfully initialised');
    return db;
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
