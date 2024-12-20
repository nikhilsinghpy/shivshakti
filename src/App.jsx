import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { ReportSetting } from './pages/Report/ReportSetting/ReportSetting';
import { CallLogs } from './pages/Report/CallLogs/CallLogs';
import { AnnoucementLogs } from './pages/Report/AnnoucementLogs/AnnoucementLogs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route for login */}
        
        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report-setting" element={<ReportSetting />} />
          <Route path="/report/call-logs" element={<CallLogs />} />
          <Route path="/report/announcement-logs" element={<AnnoucementLogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
