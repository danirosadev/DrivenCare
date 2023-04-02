import userServices from "../services/userServices.js";

async function create(req, res, next){
    const { name, email, password } = req.body;

    try {
        await userServices.create({name, email, password})
        return res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

export default {
    create,
}