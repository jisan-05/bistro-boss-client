import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <div className="max-w-7xl mx-auto">
                <RouterProvider router={router} />
            </div>
        </HelmetProvider>
    </StrictMode>
);
