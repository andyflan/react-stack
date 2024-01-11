import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';

const router = createBrowserRouter([{
  path: "/",
  element: <Dashboard />,
}, {
  path: "/login",
  element: <Login />,
}]);

export const Router = () => <RouterProvider router={router} />;
