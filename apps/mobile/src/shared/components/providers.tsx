import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { type ReactNode, useState } from "react"
import ThemeProvider from "~/shared/components/theme-provider"
import { links, trpc } from "~/shared/trpc"

const queryClient = new QueryClient()

export default function Providers({ children }: { children: ReactNode }) {
  const [trpcClient] = useState(() => trpc.createClient({ links }))

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
