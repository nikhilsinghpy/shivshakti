import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
// import { Signup } from './pages/auth/Signup';
import { Login } from './pages/auth/Login';
import { Layout } from './Layout/Layout';
import { Listing } from './pages/ListingPage/Listing';
import ProtectedRoute from './utils/ProtectedRoute';
import Manageuser from './pages/ManageUser/Manageuser';
import ManagePassword from './pages/ManageUser/ManagePassword/ManagePassword';
import Accessrights from './pages/ManageUser/AccessRights/Accessrights';
import Addrole from './pages/ManageUser/AddRole/Addrole';
import Updateipaddress from './pages/ManageUser/UpdateIpAddress/Updateipaddress';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route for login */}
        <Route path="/" element={<Login />} />
        
        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/listing/:filter" 
            element={
              <ProtectedRoute>
                <Listing />
              </ProtectedRoute>
            } 
          />
          <Route path='/manageuser' element={<Manageuser/>}/>
          <Route path='/managepassword' element={<ManagePassword/>}/>
          <Route path='/accessrights' element={<Accessrights/>}/>
          <Route path='/addrole' element={<Addrole/>}/>
          <Route path='/updateipaddress' element={<Updateipaddress/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
