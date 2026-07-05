import type { Context } from "hono";
import { createBad, findBadList } from "../service/bad.service.js";

export const getBad = async (c: Context) => {
    const badList = await findBadList();

    return c.json(badList)
}

export const postBad = async (c: Context) => {
    const body = await c.req.json<{ name?: unknown }>();

    if (typeof body.name !== "string" || body.name.trim() === "") {
        return c.json(
            { message: "name is required" },
            400
        )
    }

    const bad = await createBad({
        name: body.name,
    });

    return c.json(bad, 201)
}
