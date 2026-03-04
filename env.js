import { env as loadEnv } from 'custom-env';
import { z } from 'zod'


process.env.APP_STAGE = process.env.APP_STAGE ?? 'dev';

const isProduction = process.env.APP_STAGE === "production";
const isDev = process.env.APP_STAGE === "dev";
const isTest = process.env.APP_STAGE === 'test';


if (isDev) {
  loadEnv()
} else if(isTest) {
  loadEnv('test')
}

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  APP_STAGE: z
    .enum(['dev', 'production', 'test'])
    .default('dev'),

  PORT: z.coerce.number().int().positive().default(3000),
  DATABASE_URL: z.string().startsWith("mongodb+srv://", "URL must be start with mongodb+srv://")
})

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error("Invalid environment variables:", env.error.format());
  process.exit(1);
}

export const ENV = env.data;
