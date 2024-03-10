import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";

interface IProvider {
    children: React.ReactNode
}
export const queryClient = new QueryClient()
export function Provider ({children}:IProvider) {
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}