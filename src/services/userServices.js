import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import { v4 as uuidV4 } from "uuid";

async function create({name, email, password}){
    const { rowCount } = await userRepositories.findByEmail(email)
    if (rowCount) return res.sendStatus(409)

    const hashPassword = await bcrypt.hash(password, 10)
    await userRepositories.create({name, email, password: hashPassword})
}

async function signin({email, password}){
    const {
        rowCount,
        rows: [user],
    } = await userRepositories.findByEmail(email)

    if (!rowCount) return res.sendStatus(409)

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return console.log("Email or password are incorrect")

    const token = uuidV4()
    await userRepositories.createSession({token, user: user.id})

    return token
}

export default {
    create,
    signin,
}