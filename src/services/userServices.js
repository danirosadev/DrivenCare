import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import { v4 as uuidV4 } from "uuid";

async function create({name, email, password}){
    const { rowCount } = await userRepositories.findByEmail(email)
    if (rowCount) return resizeBy.sendStatus(409)

    const hashPassword = await bcrypt.hash(password, 10)
    await userRepositories.create({name, email, password})
}

export default {
    create,
}