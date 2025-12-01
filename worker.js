// Worker B
import { WorkerEntrypoint } from "cloudflare:workers";
export default class WorkerB extends WorkerEntrypoint {
  // Currently, entrypoints without a named handler are not supported
  async fetch() { return new Response(null, {status: 404}); }
  async add(a, b) { return a + b; }
}
  
// --
// Worker A
export default {
  async fetch(request, env) {
    const result = await env.WORKER_B.add(1, 2);
    return new Response(result);
  }
}
