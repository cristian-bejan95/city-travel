import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import Places from "./pages/Places";
import About from "./pages/About";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/city/:slug",
    element: <City />,
  },
  {
    path: "/places",
    element: <Places />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
