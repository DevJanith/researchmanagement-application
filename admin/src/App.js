import { useContext } from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { userInput } from "./formSource";
import UserReservation from "./pages/AdminManagement/UserReservation/UserReservation";
import Auth from "./pages/auth/Auth";
import CompositeTable from "./pages/CompositeTable/CompositeTable";
import Home from "./pages/home/Home";
import List from "./pages/list/list";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Registration from "./pages/registration/Registration";
import Single from "./pages/single/Single";
import StaffManagement from "./pages/StaffManagement/StaffManagement";
import ResearchTopics from "./pages/StaffManagement/ResearchTopicsManagement/ResearchTopics";
import MarkingScheme from "./pages/StaffManagement/MarkingScheme";
import ResearchDocuments from "./pages/StaffManagement/ResearchDocuments";
import UnderContraction from "./pages/underContraction/UnderContraction";

import "./style/dark.scss";
import AlocatePanel from "./pages/AdminManagement/AllocatePanel/AllocatePanel";
import Materials from "./pages/AdminManagement/Materials/Materials";
// 


// 
function App() {

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="admin-management" >
              <Route index element={<AdminManagement />} />
            </Route>
            <Route path="staff-management">
              <Route index element={<StaffManagement />} />
              <Route path="table" element={<CompositeTable />} />
            </Route>
            <Route path="research-topics">
              <Route index element={<ResearchTopics />} />
            </Route>
            <Route path="marking-scheme">
              <Route index element={<MarkingScheme />} />
            </Route>
            <Route path="research-document">
              <Route index element={<ResearchDocuments />} />
            </Route>
            <Route path="user-reservation" >
              <Route index element={<UserReservation />} />
            </Route>
            <Route path="alocate-panel" >
              <Route index element={<AlocatePanel />} />
            </Route>
            <Route path="alocate-panel" >
              <Route index element={<AlocatePanel />} />
            </Route>
            <Route path="materials" >
              <Route index element={<Materials />} />
            </Route>
            <Route path="users" >
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInput} title={"Add New User"} />} />
            </Route>
            <Route path="products" >
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="orders" >
              <Route index element={<List />} />
              <Route path=":ordersId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="delivery" >
              <Route index element={<List />} />
              <Route path=":deliveryId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
          <Route path="/under-construction*" >
            <Route index element={<UnderContraction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
