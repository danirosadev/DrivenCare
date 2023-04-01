import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const db = new Pool({
    db: process.env.DATABASE_URL,
})

export default db;