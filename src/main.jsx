import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import ErrorPage from './Components/ErrorPage/error-page';
import Header from './Components/Header/Header';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import { json } from "react-router-dom";
import ViewDetails from './Components/ViewDetails/ViewDetails';
import Outlets from './Components/Outlet/Outlets';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Outlets></Outlets>,
        loader: () => fetch("/JobCategoryList.json"),
      },
      {
        path: "Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "Applied-Jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/view-details/:jobID"  ,
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('/FeaturedJobs.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
