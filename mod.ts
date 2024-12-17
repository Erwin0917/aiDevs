import { serve } from "https://deno.land/std/http/server.ts";

const handler = async (req: Request): Promise<Response> => {

  console.log('serwer logs: serwer run!');

  return new Response("Hello from Deno2!", {
    headers: { "content-type": "text/plain" },
  });
};

serve(handler, { port: 8000 });
