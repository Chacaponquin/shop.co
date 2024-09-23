import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/login", element: <Login /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
