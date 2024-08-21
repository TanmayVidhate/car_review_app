import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home/>
);

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },

  {
    path:'/About',
    element:<About/>
  }
])

root.render(<RouterProvider router={router} /> )

