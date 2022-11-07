import React from 'react'
import { Route, Routes } from "react-router-dom";
import Email from './EmailVerify/Email';
import Error from './ErrorHandle/Error';
import Forgot from './ForgotPassword/Forgot';
import Login from './Login/Login';
import NewPassword from './NewPassword/NewPassword';
import Register from './Register/Register';
import ResetSuccess from './ResetSuccess/ResetSuccess';
import Success from './Success/Success';
import Home from "./Dashboard/Home/Home"
import Verification from './Verification/Verification';
import Menu from './Dashboard/Menu/Menu';
import TableManager from './Dashboard/TableManager/TableManager';
import TabHistory from './Dashboard/Tab History/TabHistory';
import ViewOrder from './Dashboard/ViewOrder/ViewOrder';
import ViewTab from './Dashboard/ViewTab/ViewTab';
import Users from './Dashboard/Users/Users';
import Accounts from './Dashboard/Accounts/Accounts';
import {PrivateRoute } from "../PrivateRoute";
import { history } from "../_helpers";
import {
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Settings from './Dashboard/Settings/Settings';
import ServerHome from './ServerDashboard/ServerHome/ServerHome';
import Tips from './ServerDashboard/Tips/Tips';
import ServerTableManager from './ServerDashboard/ServerTableManager/ServerTableManager';
import ViewTabServer from './ServerDashboard/ViewTab/ViewTab';
import ServerViewOrder from './ServerDashboard/ServerViewOrder/ServerViewOrder';
import ServerMenu from './ServerDashboard/Menu/ServerMenu';
import ServerSettings from './ServerDashboard/Settings/ServerSettings';
import HostHome from './HostDashboard/HostHome/HomeHost';
import HostTableManager from './HostDashboard/TableManager/TableManager'
import HostSettings from './HostDashboard/Settings/Settings'
import TabAndTip from './ServerDashboard/TabAndTip/TabAndTip';
import Receipt from './ServerDashboard/Receipt/Receipt';
import ConsumerHome from './ConsumerDashboard/ConsumerHome/ConsumerHome';
import ConsumerOrder from './ConsumerDashboard/ConsumerOrder/ConsumerOrder';
import ConsumerOrderItems from './ConsumerDashboard/ConsumerOrderItems/ConsumerOrderItems';
import ConsumerReceipt from './ConsumerDashboard/ConsumerReceipt/ConsumerReceipt';
import ConsumerProfile from './ConsumerDashboard/ConsumerProfile/ConsumerProfile';
import ConsumerLogin from './ConsumerDashboard/ConsumerLogin/ConsumerLogin';
import ConsumerRegister from './ConsumerDashboard/ConsumerRegister/ConsumerRegister';
import ConsumerVerification from './ConsumerDashboard/ConsumerVerification/ConsumerVerification';
import ConsumerSMS from './ConsumerDashboard/ConsumerSms/ConsumerSMS';
import ConsumerEditProfile from './ConsumerDashboard/ConsumerEditProfile/ConsumerEditProfile';
import ConsumerDetailReceipts from './ConsumerDashboard/ConsumerDetailReceipts/ConsumerDetailReceipts';
import ConsumerPassword from './ConsumerDashboard/ConsumerPassword/ConsumerPassword';
import ConsumerWallet from './ConsumerDashboard/ConsumerWallet/ConsumerWallet';
import ConsumerCard from './ConsumerDashboard/ConsumerCard/ConsumerCard';
function Header() {

      history.navigate = useNavigate();
      history.location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/success" element={<Success />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/emailverify" element={<Email />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/resetsuccess" element={<ResetSuccess />} />
        <Route path="/404error" element={<Error />} />
        <Route path="/notifications" element={<Error />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }
        />
        <Route
          path="/tablemanager"
          element={
            <PrivateRoute>
              <TableManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/tabhistory"
          element={
            <PrivateRoute>
              <TabHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="/vieworder"
          element={
            <PrivateRoute>
              <ViewOrder />
            </PrivateRoute>
          }
        />
        <Route
          path="/viewTab"
          element={
            <PrivateRoute>
              <ViewTab />
            </PrivateRoute>
          }
        />
        <Route
          path="/Users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/Accounts"
          element={
            <PrivateRoute>
              <Accounts />
            </PrivateRoute>
          }
        />
        <Route
          path="/Settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="/ServerHome"
          element={
            <PrivateRoute>
              <ServerHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/Tips"
          element={
            <PrivateRoute>
              <Tips />
            </PrivateRoute>
          }
        />
        <Route
          path="/ServerTableManager"
          element={
            <PrivateRoute>
              <ServerTableManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/ServerViewTab"
          element={
            <PrivateRoute>
              <ViewTabServer />
            </PrivateRoute>
          }
        />
        <Route
          path="/ServerViewOrder"
          element={
            <PrivateRoute>
              <ServerViewOrder />
            </PrivateRoute>
          }
        />
        <Route
          path="/ServerMenu"
          element={
            <PrivateRoute>
              <ServerMenu />
            </PrivateRoute>
          }
        />
        <Route
          path="/ServerSettings"
          element={
            <PrivateRoute>
              <ServerSettings />
            </PrivateRoute>
          }
        />
        <Route
          path="/HostHome"
          element={
            <PrivateRoute>
              <HostHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/HostTableManager"
          element={
            <PrivateRoute>
              <HostTableManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/HostSettings"
          element={
            <PrivateRoute>
              <HostSettings />
            </PrivateRoute>
          }
        />
        <Route
          path="/TabAndTip"
          element={
            <PrivateRoute>
              <TabAndTip />
            </PrivateRoute>
          }
        />
        <Route
          path="/Receipt"
          element={
            <PrivateRoute>
              <Receipt />
            </PrivateRoute>
          }
        />
        <Route
          path="/ConsumerHome"
          element={
              <ConsumerHome />
          }
        />
        <Route
          path="/ConsumerOrder"
          element={
            <PrivateRoute>
              <ConsumerOrder />
            </PrivateRoute>
          }
        />
        <Route
          path="/ConsumerOrderItems"
          element={
            <PrivateRoute>
              <ConsumerOrderItems />
            </PrivateRoute>
          }
        />
        <Route
          path="/ConsumerReceipt"
          element={
            <PrivateRoute>
              <ConsumerReceipt />
            </PrivateRoute>
          }
        />
        <Route
          path="/ConsumerProfile"
          element={
            <PrivateRoute>
              <ConsumerProfile />
            </PrivateRoute>
          }
        />
        <Route path="/ConsumerLogin" element={<ConsumerLogin />} />
        <Route path="/ConsumerRegister" element={<ConsumerRegister />} />
        <Route
          path="/ComsumerVerification"
          element={<ConsumerVerification />}
        />
        <Route path="/ConsumerSMS" element={<ConsumerSMS />} />
        <Route path="/ConsumerSMS" element={<ConsumerSMS />} />
        <Route path="/EditProfile" element={<ConsumerEditProfile />} />
        <Route
          path="/ConsumerDetailReceipt"
          element={<ConsumerDetailReceipts />}
        />
        <Route path="/ConsumerPassword" element={<ConsumerPassword />} />
        <Route path="/ConsumerWallet" element={<ConsumerWallet />} />
        <Route path="/ConsumerAddCard" element={<ConsumerCard />} />
      </Routes>
    </div>
  );
}

export default Header
