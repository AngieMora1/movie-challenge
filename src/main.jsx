import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter
} from "react-router-dom";
//import App from './App.jsx'
import './index.css'
// import Home from './routes/Home.jsx';
// import Estrenos from './routes/ErrorPage';
import App from './App';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home />,
//     errorElement:<ErrorPage />,
//   },
//   {
//     path:"Contacts/:contactId",
//     element:<App />
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router = {router}/> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
// <App />