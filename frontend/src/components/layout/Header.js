import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-wrapper pt-3 pb-3 shadow-xss">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 navbar pt-0 pb-0">
            <Link to="/">
              <h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">
                <i className="feather-package text-success display1-size mr-3 ml-3" />
                Volunteer
                <span className="d-block font-xsssss ls-1 text-grey-500 open-font text-center ml-5">
                  Bringing True Potential
                </span>
              </h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav nav-menu float-none text-right">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Our Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item d-xl-none">
                  <Link
                    to="/auth/login"
                    className="header-btn bg-dark fw-500 font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1 mr-1 mont-font"
                  >
                    <span className="text-white">Login</span>
                  </Link>
                  <Link
                    to="/auth/register"
                    className="header-btn bg-current fw-500 font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1 mont-font"
                  >
                    <span className="text-white">Register</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 text-right d-none d-lg-block">
            <Link
              to="/auth/login"
              className="header-btn bg-dark fw-500 text-white font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1 mr-1 mont-font"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="header-btn bg-current fw-500 text-white font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1 mont-font"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
