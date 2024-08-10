import { Router } from "./Router";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalsProvider } from './app/contexts';


 const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       retry: false,
       refetchOnWindowFocus: false,
     },
   },
 });


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalsProvider>
        <Router />
        <Toaster />
      </ModalsProvider>
    </QueryClientProvider>
  );
}

export default App;
