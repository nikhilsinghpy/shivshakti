import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Manageuser from './pages/ManageUser/Manageuser';
import ManagePassword from './pages/ManageUser/ManagePassword/ManagePassword';
import Accessrights from './pages/ManageUser/AccessRights/Accessrights';
import Addrole from './pages/ManageUser/AddRole/Addrole';
import Updateipaddress from './pages/ManageUser/UpdateIpAddress/Updateipaddress';
import { Dashboard } from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Sublocation from './pages/Settings/SubLocation/Sublocation';
import Cameralist from './pages/Settings/CameraList/Cameralist';
import Department from './pages/Settings/Department/Department';
import Designation from './pages/Settings/Designation/Designation';
import { ReportSetting } from './pages/Report/ReportSetting/ReportSetting';
import { CallLogs } from './pages/Report/CallLogs/CallLogs';
import { AnnoucementLogs } from './pages/Report/AnnoucementLogs/AnnoucementLogs';
import Imports from './pages/Settings/Imports/Imports';
import Forms from './component/Forms/Forms';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route for login */}

        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path='/manage-user' element={<Manageuser />} />
          <Route path='/managepassword' element={<ManagePassword />} />
          <Route path='/addrole' element={<Addrole />} />
          <Route path='/updateipaddress' element={<Updateipaddress />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/sublocation' element={<Sublocation />} />
          <Route path='/cameralist' element={<Cameralist />} />
          <Route path='/department' element={<Department />} />
          <Route path='/designation' element={<Designation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report-setting" element={<ReportSetting />} />
          <Route path="/report/call-logs" element={<CallLogs />} />
          <Route path="/imports" element={<Imports />} />
          <Route path="/annoucementLogs" element={<AnnoucementLogs />} />
          <Route path="/forms" element={<Forms />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
