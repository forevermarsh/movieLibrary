import React from 'react'
import ReactDOM from 'react-dom/client'
import Movies from "./pages/movies";
import Series from "./pages/series";
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound/>
  },{
    path: '/movies',
    element: <Movies/>
  },{
    path: '/series',
    element: <Series/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
