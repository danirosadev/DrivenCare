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

async function findById(id){
    return await db.query(
        `
            SELECT * FROM users WHERE id = $1
        `,
        [id]
    )
}

async function createSession({token, userId, doctorId}){
    await db.query(
        `
            INSERT INTO sessions (token, user_id, doctor_id)
            VALUES ($1, $2, $3)
        `,
        [token, userId, doctorId]
    )
}

async function findSessionByToken(token){
    return await db.query(
        `
            SELECT * FROM sessions WHERE token = $1
        `,
        [token]
    )
}

export default {
    create,
    findByEmail,
    findById,
    createSession,
    findSessionByToken,
}