import { createBrowserRouter } from "react-router";
import MainRoot from "./components/layout/MainRoot";
import Dashboard from "./pages/Dashboard/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

export default router;
