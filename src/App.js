import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';


const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/services", name: "Services", Component: Services },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/Login", name: "Login", Component: Login }
]

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {/* <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route> */}

          {
            publicRoute.map(({path, Component}, index) => <Route key={index} path={path} element={<Component/>} />)
          }

        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
