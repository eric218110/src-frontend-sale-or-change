import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../../presentation/home/pages";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
