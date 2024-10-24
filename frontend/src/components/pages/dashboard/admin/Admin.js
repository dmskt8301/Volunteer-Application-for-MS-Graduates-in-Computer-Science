import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="middle-sidebar-left" style={{ height: "88vh" }}>
      <Outlet />
    </div>
  );
}
