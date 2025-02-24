import { isProduction } from "@this/utils/environment"
import { createUrlBuilder } from "@this/utils/url"

import env from "~/shared/env"

export const buildApiUrl = createUrlBuilder(
  env.EXPO_PUBLIC_API_URL,
  isProduction ? "https" : "http"
)
