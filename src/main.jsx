import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home';
import Blog from './components/Blog';

import Login from './components/Login';
import Registation from './components/Registation';
import AuthProvider from './provider/AuthProvider';
import { AuthDataProvider } from './provider/AuthDataProvider';
import ErrorPage from './components/ErrorPage';
import Recipes from './components/Recipes';
import PrivateRoutes from './routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/sign',
        element:<Registation></Registation>
      },
      {
        path:'/details/:id',
        element:<PrivateRoutes><Recipes></Recipes></PrivateRoutes>,
        loader:({params})=>fetch(`https://b7a10-chef-recipe-hunter-server-side-ashfak-rahad-ashfak-rahad.vercel.app/chef/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthDataProvider> <AuthProvider>  <RouterProvider router={router}  /></AuthProvider></AuthDataProvider>
  </React.StrictMode>,
)
