import { createBrowserRouter } from 'react-router-dom'; 
import App from './App'; 
import Profile from './components/Profile';
import Register from './components/Register';
 
export const router = createBrowserRouter([ 
  { 
    path: '/', 
    element: <App />, 
  }, 
  { 
    path: '/Profile', 
    element: <Profile />,
},
{ 
  path: '/Register', 
  element: <Register />,
},
]);