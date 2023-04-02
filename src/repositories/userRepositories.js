import db from "../config/database.js";

async function create({name, email, password}){
    await db.query(
        `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
        `,
        [name, email, password]
    )
}

async function findByEmail(email){
    return await db.query(
        `
            SELECT * FROM users WHERE email = $1
        `,
        [email]
    )
}

export default {
    create,
    findByEmail,
}