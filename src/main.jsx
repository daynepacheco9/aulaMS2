
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ProdPage } from './pages/ProdPage.jsx';
import { ApiPage } from './pages/ApiPage.jsx';
import { Grap} from './pages/GraphsPage.jsx';
import { Map } from './pages/MapPage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <App>
      <ProdPage/>
    </App>
  },
  {
    path: "/api",
    element:
    <App>
      <ApiPage/>
    </App>
  },
  {
    path: "/maps",
    element:
    <App>
      <Map/>
    </App>
  },
  {
    path: "/graph",
    element:
    <App>
      <Grap/>
    </App>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
