import { useNavigate, Outlet } from "react-router-dom";
import Header from "./Header";

export default function AuthLayout() {
  useNavigate();
  return (
    <div>
      <div className="main-wrap">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
