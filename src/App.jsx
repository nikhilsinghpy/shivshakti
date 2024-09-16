import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Signup } from './pages/auth/Signup';
import { Login } from './pages/auth/Login';
import { Layout } from './Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* route for auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* route for home */}
        <Route  element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
