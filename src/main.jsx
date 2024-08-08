import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.scss'
import Root from './Routes/Root';
import { DataProvider } from '../Context/Context';



const router = createHashRouter([


  {
    path: "/",
    element: (
      <DataProvider>
              <Root />
      </DataProvider>

    ),
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
