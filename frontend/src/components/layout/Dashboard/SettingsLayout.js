import { Outlet } from "react-router-dom";

export default function SettingsLayout() {
  return (
    <div className="middle-sidebar-left" style={{ height: "88vh" }}>
      <div className="middle-wrap">
        <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
