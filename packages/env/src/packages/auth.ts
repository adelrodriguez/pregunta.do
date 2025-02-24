import { createEnv } from "@t3-oss/env-core"

import * as z from "@this/utils/schema"

export default createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string().url(),
    BETTER_AUTH_BASE_PATH: z.string().optional(),
    BETTER_AUTH_TRUSTED_ORIGINS: z
      .preprocess(
        val => (typeof val === "string" ? val.split(",").filter(Boolean) : val),
        z.array(z.string().url())
      )
      .optional(),
    /**
     * This is used to enable the auth server to handle cookies in Next.js
     * server actions (used for sign in, sign out, sign up, etc).
     */
    BETTER_AUTH_SERVER_ACTIONS: z.booleanLike().default(false),

    // Google
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),

    // GitHub
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
  },
  runtimeEnv: process.env,
  skipValidation: process.env.SKIP_VALIDATION_AUTH === "true",
})
