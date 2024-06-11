import mongoose, { Mongoose } from 'mongoose';

const connectionString = process.env.MONGODB_URL || "";

let db: Mongoose;
(async () => {
try {
  db = await mongoose.connect(connectionString, { user: process.env.MONGODB_USERNAME, pass: process.env.MONGODB_PASSWORD});
} catch(e) {
  console.error(e);
}
})();

export default db;