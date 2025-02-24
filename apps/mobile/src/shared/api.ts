import type { AppClient } from "api/client"
import { hc } from "hono/client"

import env from "~/shared/env"

export const client = hc<AppClient>(env.EXPO_PUBLIC_API_URL)
