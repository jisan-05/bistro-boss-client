import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";
import {
    QueryClient,
    QueryClientProvider,
    
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <HelmetProvider>
                    <div className="max-w-7xl mx-auto">
                        <RouterProvider router={router} />
                    </div>
                </HelmetProvider>
            </QueryClientProvider>
        </AuthProvider>
    </StrictMode>
);
