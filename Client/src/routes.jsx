
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import ListUsers from "./pages/ListUsers/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list-users",
    element: <ListUsers />,
  },
]);

export default router;