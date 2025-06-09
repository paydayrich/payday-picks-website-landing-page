// Type definitions for Cloudflare Pages Functions
declare global {
  interface CloudflareEnv {
    // Define your environment variables here
    WEBHOOK_URL?: string;
    DATABASE_URL?: string;
  }
}

// Cloudflare Pages Function type
declare type PagesFunction<Env = CloudflareEnv> = (
  context: {
    request: Request;
    env: Env;
    params: Record<string, string>;
    data: Record<string, any>;
    next: () => Promise<Response>;
    waitUntil: (promise: Promise<any>) => void;
  }
) => Response | Promise<Response>;

export {};