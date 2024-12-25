import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Manageuser from './pages/ManageUser/Manageuser';
import ManagePassword from './pages/ManageUser/ManagePassword/ManagePassword';
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
import { Accessrights } from './pages/ManageUser/AccessRights/Accessrights';
import { Addrole } from './pages/ManageUser/AddRole/Addrole';
import Forms from './component/Forms/Forms';
import { Location } from './pages/Settings/location/Location';
import { MobileDevices } from './pages/Settings/MobileDevices/MobileDevices';
import BigForms from './component/Forms/BigForms';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route for login */}

        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path='/manage-user' element={<Manageuser />} />
          <Route path='/manage-password' element={<ManagePassword />} />
          <Route path='/access-rights' element={<Accessrights />} />
          <Route path='/addrole' element={<Addrole />} />
          <Route path='/updateipaddress' element={<Updateipaddress />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/location' element={<Location />} />
          <Route path='/sub-location' element={<Sublocation />} />
          <Route path='/camera-list' element={<Cameralist />} />
          <Route path='/department' element={<Department />} />
          <Route path='/designation' element={<Designation />} />
          <Route path='/mobile-devices' element={<MobileDevices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report-setting" element={<ReportSetting />} />
          <Route path="/report/call-logs" element={<CallLogs />} />
          <Route path="/report/announcement-logs" element={<AnnoucementLogs />} />
          <Route path="/imports" element={<Imports />} />
          <Route path="/annoucementLogs" element={<AnnoucementLogs />} />
          <Route path="/forms" element={<BigForms />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
