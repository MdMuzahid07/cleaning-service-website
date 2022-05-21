import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from './routes/publicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RequireAuth from './authentication/RequireAuth';
import { RequireRoutes } from './routes/RequireRoutes';
import AdminRoute from './authentication/AdminRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import AddAdmin from './pages/Dashboard/AddAdmin';
import AddServices from './pages/Dashboard/AddServices';


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


          <Route element={<RequireAuth />}>
            {
              RequireRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)
            }
          </Route>

          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path="add-admin" element={<AddAdmin />} />
              <Route path="add-services" element={<AddServices />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
