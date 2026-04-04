import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./app/router/appRouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
    return (
        <>
            <MantineProvider>
                <QueryClientProvider client={queryClient}>
                    <AppRouter />
                    <ReactQueryDevtools
                        initialIsOpen={false}
                    ></ReactQueryDevtools>
                </QueryClientProvider>
            </MantineProvider>
        </>
    );
}

export default App;
