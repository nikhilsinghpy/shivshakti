import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
// import { Signup } from './pages/auth/Signup';
import { Login } from './pages/auth/Login';
import { Layout } from './Layout/Layout';
import { Listing } from './pages/ListingPage/Listing';
import ProtectedRoute from './utils/ProtectedRoute';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
