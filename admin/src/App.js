import { useContext } from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { userInput } from "./formSource";
import AlocatePanel from "./pages/AdminManagement/AllocatePanel/AllocatePanel";
import Materials from "./pages/AdminManagement/Materials/Materials";
import UserReservation from "./pages/AdminManagement/UserReservation/UserReservation";
// import UserReservation from "./pages/AdminManagement/UserReservation/UserReservation";
import Auth from "./pages/auth/Auth";
import CompositeTable from "./pages/CompositeTable/CompositeTable";
import Home from "./pages/home/Home";
import List from "./pages/list/list";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Registration from "./pages/registration/Registration";
import Single from "./pages/single/Single";
import MarkingScheme from "./pages/StaffManagement/MarkingScheme";
import ResearchDocuments from "./pages/StaffManagement/ResearchDocuments";
import ResearchTopics from "./pages/StaffManagement/ResearchTopicsManagement/ResearchTopics";
import StaffManagement from "./pages/StaffManagement/StaffManagement";
import UnderContraction from "./pages/underContraction/UnderContraction";
import "./style/dark.scss";

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
            <Route path="admin-management" >
              {/* <Route index element={<AdminManagement />} /> */}
              <Route path="materials" element={<Materials />} />
              <Route path="user-reservation" element={<UserReservation />} />
              <Route path="alocate-panel" element={<AlocatePanel />} />
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
          </Route>
          <Route path="/under-construction*" >
            <Route index element={<UnderContraction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// 



export default App;
