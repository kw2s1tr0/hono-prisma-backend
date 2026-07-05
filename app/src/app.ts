import { Hono } from "hono";
import { logger } from "hono/logger";
import badRoute from "./route/bad.route.js";

const app = new Hono()

app.use('*',logger())

app.route('/api/bad', badRoute)

app.get('/health', (c) => {
    return c.json(
        { message: 'ok' }
    )
})

app.notFound((c) => {
    return c.json(
        { message: 'Not Found'},
        404
    )
})

app.onError((error, c) => {
    console.error(error)

    return c.json(
        { message: 'INTERNAL_SERVER_ERROR'},
        500
    )
})

export default app
