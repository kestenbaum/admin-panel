import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";

interface IProvider {
    children: React.ReactNode
}
export function Provider ({children}:IProvider) {
    const queryClient = new QueryClient()

    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}