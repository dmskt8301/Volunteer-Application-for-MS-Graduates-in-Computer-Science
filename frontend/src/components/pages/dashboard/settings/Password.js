import { Link } from "react-router-dom";

export default function Password() {
  return (
    <div>
      <div>
        <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
          <Link to="/dashboard/settings" className="d-inline-block mt-2">
            <i className="ti-arrow-left font-sm text-white" />
          </Link>
          <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
            Change Password
          </h4>
        </div>
        <div className="card-body p-lg-5 p-4 w-100 border-0">
          <form action="#">
            <div className="row">
              <div className="col-lg-12 mb-3">
                <div className="form-gorup">
                  <label className="mont-font fw-600 font-xssss">
                    Current Password
                  </label>
                  <input
                    type="text"
                    name="comment-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <div className="form-gorup">
                  <label className="mont-font fw-600 font-xssss">
                    Change Password
                  </label>
                  <input
                    type="text"
                    name="comment-name"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-3">
                <div className="form-gorup">
                  <label className="mont-font fw-600 font-xssss">
                    Confirm Change Password
                  </label>
                  <input
                    type="text"
                    name="comment-name"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-0">
                <Link className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block">
                  Save
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
