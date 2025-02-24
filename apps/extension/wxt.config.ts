import tailwindcss from "@tailwindcss/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { defineConfig } from "wxt"

// See https://wxt.dev/api/config.html
export default defineConfig({
  dev: {
    server: { port: 3004 },
  },
  extensionApi: "chrome",
  imports: false,
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],
  publicDir: "static",
  srcDir: "src",
  vite: () => ({
    plugins: [TanStackRouterVite(), tailwindcss()],
  }),
})
