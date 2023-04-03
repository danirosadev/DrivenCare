import userRepositories from "../repositories/userRepositories.js";

async function authValidation(req, res, next){
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.status(401).send("Não autorizado")

    try {
        const {
            rows: [session],
        } = await userRepositories.findSessionByToken(token)
        if (!session) return res.status(401).send("Sessão não existe")

        const {
            rows: [user],
        } = await userRepositories.findById(session.userId)
        if (!user) return res.status(404).send("Usuario não encontrado")

        res.locals.user(user)
        next()
    } catch (error) {
        next(error)
    }
}

export default { authValidation }