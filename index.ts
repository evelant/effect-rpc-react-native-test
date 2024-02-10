import { BunHttpServer, BunRuntime } from "@effect/platform-bun";
import * as Http from "@effect/platform/HttpServer";
import { Router, Rpc } from "@effect/rpc";
import { HttpRouter } from "@effect/rpc-http";
import { Effect, Layer, ReadonlyArray, Stream } from "effect";
import { GetUser, GetUserIds, User, UserId } from "./app/schema.js";

// Implement the RPC server router
const router = Router.make(
  Rpc.stream(GetUserIds, () =>
    Stream.fromIterable(ReadonlyArray.makeBy(1000, UserId))
  ),
  Rpc.effect(GetUser, ({ id }) =>
    Effect.succeed(new User({ id, name: "John Doe" }))
  )
);

export type UserRouter = typeof router;

// Create the http server
const HttpLive = Http.router.empty.pipe(
  Http.router.post("/rpc", HttpRouter.toHttpApp(router)),
  Http.server.serve(Http.middleware.logger),
  Http.server.withLogAddress,
  Layer.provide(BunHttpServer.server.layer({ port: 3000 }))
);

Layer.launch(HttpLive).pipe(BunRuntime.runMain);
