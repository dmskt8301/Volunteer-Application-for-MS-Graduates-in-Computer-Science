import { Outlet } from "react-router-dom";

export default function Professor() {
  return (
    <div className="middle-sidebar-left" style={{ height: "88vh" }}>
      <Outlet />
    </div>
  );
}
