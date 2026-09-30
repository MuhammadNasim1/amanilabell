import {env} from 'cloudflare:workers';
export function database(){if(!env.DB)throw new Error('Store temporarily unavailable');return env.DB}
export function adminKey(){return (env as unknown as {ADMIN_KEY?:string}).ADMIN_KEY}
