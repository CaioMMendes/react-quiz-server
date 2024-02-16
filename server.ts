import { create, router as jsonRouter, defaults } from "json-server";
const server = create();
const router = jsonRouter({ source: "db.json" });
const middlewares = defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
