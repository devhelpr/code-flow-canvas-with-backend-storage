import { Hono } from "hono";
import { renderer } from "./renderer";
import fs from "node:fs";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render("");
});

app.get("/flow", (c) => {
  try {
    const data = fs.readFileSync(
      `${import.meta.dirname}/../public/static/flow.json`,
      "utf8"
    );
    return c.json(JSON.parse(data));
  } catch (err) {
    console.error(err);
    return c.json({});
  }
});

app.post("/flow", async (c) => {
  const body = await c.req.json();
  fs.writeFileSync(
    `${import.meta.dirname}/../public/static/flow.json`,
    JSON.stringify(body)
  );
  return c.json({});
});

export default app;
