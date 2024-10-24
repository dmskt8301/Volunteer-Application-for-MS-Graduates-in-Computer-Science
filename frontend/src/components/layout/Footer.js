import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-wrapper pt-5 pb-0 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-sm-9 col-xs-12 xs-mb-2">
                <Link to="/">
                  <h1 className="fredoka-font ls-3 fw-700 text-white font-xxl">
                    Volunteer
                    <span className="d-block font-xsssss ls-1 text-grey-500 open-font">
                      Bringing True Potential
                    </span>
                  </h1>
                </Link>
              </div>
              <div className="col-md-3 col-lg-2 col-sm-3 col-xs-6 xs-mb-2"></div>
              <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6"></div>
              <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                <h5>Links</h5>
                <ul>
                  <li>
                    <Link>FAQ</Link>
                  </li>
                  <li>
                    <Link>Terms of Use</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Feedback</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                <h5 className="mb-3">Office</h5>
                <p className="w-100">
                  701 S Nedderman Dr, Arlington, TX 76019, USA
                  <br />
                  1-987-654-3210
                </p>
                <p className="w-100">support@uta.edu</p>
                <ul className="list-inline">
                  <li className="list-inline-item mr-3">
                    <Link>
                      <i className="ti-facebook font-sm"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link>
                      <i className="ti-twitter-alt font-sm"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link>
                      <i className="ti-linkedin font-sm"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link>
                      <i className="ti-instagram font-sm"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="middle-footer mt-5 pt-4"></div>
          </div>
          <div className="col-sm-12 lower-footer pt-0"></div>
          <div className="col-sm-6 col-xs-12"></div>
          <div className="col-sm-6 col-xs-12 text-right">
            <p className="copyright-text float-right">
              © <span id="currentYear">{new Date().getFullYear()}</span>{" "}
              Copyright. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
