import { type Config } from "drizzle-kit";

import { env } from '@/env';



export default {
  schema: './src/server/db/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: env.TURSO_URL!,
    authToken: env.TURSO_AUTH_TOKEN!,
  },
} satisfies Config;

