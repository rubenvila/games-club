import { createBrowserRouter } from 'react-router-dom'; 
import App from './App'; 
import Profile from './components/Profile';
import Home from './components/Home';
 
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
  path: '/Home', 
  element: <Home />,
},

]);