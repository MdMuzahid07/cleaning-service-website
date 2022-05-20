import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from './routes/publicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar>
        <Routes>

          {
            publicRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
          }

        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
