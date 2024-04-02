import { QueryClient, QueryClientProvider } from 'react-query'
import { ProviderProps } from './interface'

export const queryClient = new QueryClient()
export function Provider({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
