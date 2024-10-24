import { Link } from "react-router-dom";

export default function AppFooter() {
  return (
    <div className="app-footer border-0 shadow-lg">
      <Link to="/dashboard/student" className="nav-content-bttn nav-center">
        <i className="feather-home" />
      </Link>
      <Link
        to="/dashboard/livestream"
        className="nav-content-bttn"
        data-tab="chats"
      >
        <i className="feather-layout" />
      </Link>
      <Link className="nav-content-bttn sidebar-layer">
        <i className="feather-layers" />
      </Link>
      <Link to="/dashboard/settings" className="nav-content-bttn">
        <img
          src="/images/female-profile.png"
          alt="user"
          className="w30 shadow-xss"
        />
      </Link>
    </div>
  );
}
