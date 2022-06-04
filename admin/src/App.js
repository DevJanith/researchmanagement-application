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
import New from "./pages/new/New";
import NotFound from "./pages/notFound/NotFound";
import Single from "./pages/single/Single";
import ChatManagement from "./pages/StaffManagement/ChatFunctionManagement/ChatFunctionManagement";
import MarkingSchemeManagement from "./pages/StaffManagement/MarkingSchemeManagement/MarkingSchemeManagement";
import ResearchDocuments from "./pages/StaffManagement/ResearchDocuments";
import ResearchTopics from "./pages/StaffManagement/ResearchTopicsManagement/ResearchTopics";
import StaffManagement from "./pages/StaffManagement/StaffManagement";
import UnderContraction from "./pages/underContraction/UnderContraction";
import PanelManagement from "./pages/PanelMemberManagement/PanelManagement/PanelManagement";
import "./style/dark.scss";


function App() {

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="/under-construction*" element={<UnderContraction />} />
            <Route path="/404*" element={<NotFound />} />

            {/* <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />  */}
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
              <Route index element={<MarkingSchemeManagement />} />
            </Route>
            <Route path="research-document">
              <Route index element={<ResearchDocuments />} />
            </Route>
            <Route path="chat-function">
              <Route index element={<ChatManagement />} />
            </Route>

            {/* --------- Panel Member Management ------------*/}
            <Route path="panel-management">
              <Route index element={<PanelManagement />} />
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
// 



export default App;
