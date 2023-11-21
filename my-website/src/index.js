import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {RouterProvider , createBrowserRouter} from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';
// import LoginPage from './Component/Login/LoginPage';

// const router = createBrowserRouter([
//   {
//     path:'/login',
//     element:<LoginPage/>
//   }
// ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <App />
  {/* <RouterProvider router={router} /> */}
  </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
