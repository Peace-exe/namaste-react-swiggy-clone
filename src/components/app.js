import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./body.js";
import HeaderComponent from "./header.js"; //default importing
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./about.js";
import Error from "./errorPage.js";
import Contacts from "./contacts.js";
import RestaurantMenu from "./RestaurantMenu.js";
import { lazy,Suspense } from "react";
import Shimmer from "./shimmer.js";

const Instamart = lazy(()=> import("./instamart.js") );
/* 

const heading1 = React.createElement(
    "h1",
    {
    id:"heading1",
    },
    "heading one"
);

const heading2= React.createElement(
    "h2",
    {
        id:"heading2",
    },
    "heading two"
);

const container= React.createElement(
    "div",
    {
        id:"container",
    },
    [heading1,heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
*/


const AppLayout = () => (
  <>
    <HeaderComponent />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
