import { useContext } from "react";
import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import Auth from "./pages/auth/Auth";
import CompositeTable from "./pages/CompositeTable/CompositeTable";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import CommunicationManagement from "./pages/StudentManagement/CommunicationManagement/CommunicationManagement";
import DocumentManagement from "./pages/StudentManagement/DocumenManagement/DocumenManagement";
import GroupManagement from "./pages/StudentManagement/GroupManagement/GroupManagement";
import RequestManagement from "./pages/StudentManagement/RequestManagement/RequestManagement";
import ResearchManagement from "./pages/StudentManagement/ReserchManagement/ReserchManagement";
import UnderContraction from "./pages/underContraction/UnderContraction";
import PrivateRoutes from "./PrivateRoutes";
import "./style/dark.scss";

function App() {

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="auth" element={<Auth />} />
            <Route path="/under-construction*" element={<UnderContraction />} />
            <Route path="/404*" element={<NotFound />} />
            <Route path="student-management" >
              <Route index element={<PrivateRoutes component={Home} />} />
              <Route path="group" element={<PrivateRoutes component={GroupManagement} />} />
              <Route path="research" element={<PrivateRoutes component={ResearchManagement} />} />
              <Route path="request" element={<PrivateRoutes component={RequestManagement} />} />
              <Route path="document" element={<PrivateRoutes component={DocumentManagement} />} />
              <Route path="communication" element={<PrivateRoutes component={CommunicationManagement} />} />

              <Route path="table" element={<PrivateRoutes component={CompositeTable} />} />
            </Route>
          </Route>
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;