import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ClientLogin from "./pages/ClientLogin";
import AdminLogin from "./pages/AdminLogin";
import ClientSignup from "./pages/ClientSignup";
import AdminSignup from "./pages/AdminSignup";
import Spaces from "./pages/Spaces";
import MySpaces from "./pages/MySpaces";
import { useEffect } from "react";
import RoleSelector from "./pages/RoleSelector";
import SpaceDetails from "./pages/SpaceDetails";
import AdminDash from "./pages/AdminDash";
import CreateSpace from "./pages/createSpace";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/client-login":
        title = "";
        metaDescription = "";
        break;
      case "/admin-login":
        title = "";
        metaDescription = "";
        break;
      case "/client-signup":
        title = "";
        metaDescription = "";
        break;
      case "/admin-signup":
        title = "";
        metaDescription = "";
        break;
      case "/spaces":
        title = "";
        metaDescription = "";
        break;
      case "/my-spaces":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/client-login" element={<ClientLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/client-signup" element={<ClientSignup />} />
      <Route path="/admin-signup" element={<AdminSignup />} />
      <Route path="/spaces" element={<Spaces />} />
      <Route path="/my-spaces" element={<MySpaces />} />
      <Route path="/role-selector" element={<RoleSelector />} />
      <Route path="/spaces/:spaceId" component={SpaceDetails} />
      <Route path="/admin-dashboard" element={<AdminDash />} />
      <Route path="/create-space" element={<CreateSpace />} />
    </Routes>
  );
}
export default App;
