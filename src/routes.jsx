import { createBrowserRouter } from "react-router";
import MainRoot from "./components/layout/MainRoot";
import Dashboard from "./pages/Dashboard/page";
import Products from "./pages/Products/page";
import Services from "./pages/Services/page";
import Users from "./pages/Users/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { index: true, path: "products", element: <Products /> },
      { path: "services", element: <Services /> },
      { path: "users", element: <Users /> },
    ],
  },
]);

export default router;
