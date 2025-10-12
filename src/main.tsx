import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MovieDetail from "./MovieDetail.tsx";
import App from "./App";
import Header from "./Header.tsx";   


const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/movies/:movieId", Component: MovieDetail },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header>
      <RouterProvider router={router} />  
    </Header>
  </StrictMode>
);

