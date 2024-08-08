import { hc } from "hono/client";
import { app } from "./app";

export const { api } = hc<typeof app>('/') 