import Contact from '../pages/Contact';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';


export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/Login", name: "Login", Component: Login }
]
