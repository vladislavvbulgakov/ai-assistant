import { AppRouter } from "./app/router/AppRouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
            </QueryClientProvider>
        </>
    );
}

export default App;
