import { Hono } from "hono";
import { getBad, postBad } from "../controller/bad.controller.js";

const badRoute = new Hono()

badRoute.get('/', getBad)

badRoute.post('/', postBad)

export default badRoute
