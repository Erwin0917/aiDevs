import { serve } from "https://deno.land/std/http/server.ts";

const handler = async (req: Request): Promise<Response> => {
  return new Response("Hello from Deno!", {
    headers: { "content-type": "text/plain" },
  });
};

serve(handler, { port: 8000 });
