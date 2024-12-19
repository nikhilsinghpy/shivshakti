import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Dashboard } from './pages/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route for login */}
        
        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
