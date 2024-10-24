import { Outlet } from "react-router-dom";

export default function Student() {
  return (
    <div className="middle-sidebar-left" style={{ height: "88vh" }}>
      <Outlet />
    </div>
  );
}
