// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import ErrorPage from "./pages/ErrorPage";
import List from "./pages/List";
import ListAbout from "./pages/ListAbout";

//layuts
import RootLayout from "./layout/RootLayout";
import ListLayout from "./layout/ListLayout";


const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <ListLayout />,
          children: [
            {
              index: true,
              element: <List />,
            },
            {
              path: ":id",
              element: <ListAbout />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
};

export default App;
