import { createBrowserRouter } from "react-router-dom";
import Home from "@/app/home/Home";
import Apply from "@/app/apply/Apply";
import GeneralLayout from "../components/layout/GeneralLayout";

const router = createBrowserRouter([
  {
    element: <GeneralLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:slug",
        element: <Apply />,
      },
    ],
  },
]);

export default router;
