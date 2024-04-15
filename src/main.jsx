import Root from  "./routes/root";
import ErrorPage from "./error-page";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/', 
    errorElement: <ErrorPage />,
  },
  {
    path: "/vite-spike",
    element: <Root />,
  },
  {
    path: "/vite-spike/dee",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

