import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'


/* const router = createBrowserRouter([
  {
    path: "/",
    element : <App></App>
  },
  {
    path:"/about",
    element: <About></About>
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>
  }
]) */

//  Nested Route

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
