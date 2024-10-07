import "@/theme/index.less";
import "./locales/i18n";
import "virtual:svg-icons-register";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

import App from "./app.tsx";
import { store } from "./store/store.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      gcTime: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </HelmetProvider>,
  // </StrictMode>,
);
