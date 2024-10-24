import { useNavigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  useNavigate();
  return (
    <div>
      <div className="main-wrap">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
