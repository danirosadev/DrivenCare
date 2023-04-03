import { Router } from "express";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
//routes.use("/doctors");
//routes.use("/appointments");

export default routes;