import { createBrowserRouter } from "react-router-dom";

/**
 * Pages
 */
import LoginPage from "@/views/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

export default router;
