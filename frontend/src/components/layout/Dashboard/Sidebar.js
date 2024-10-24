import { useSelector } from 'react-redux'
import { renderImage } from '../../../common/Avatar';

export default function Sidebar() {
  const { appUser } = useSelector(state => state.app)

  return (
    <div className="middle-sidebar-right right-scroll-bar">
      <div className="middle-sidebar-right-content">
        <div className="card overflow-hidden subscribe-widget p-3 mb-3 rounded-xxl border-0">
          <div
            className="card-body p-2 d-block text-center bg-no-repeat bg-image-topcenter"
            style={{ backgroundImage: "url(/images/user-pattern.png)" }}
          >
            <figure className="avatar ml-auto mr-auto mb-0 mt-2 w90">
              <img
                src={renderImage(appUser.image)}
                alt="user-12"
                className="float-right rounded-circle w-100"
              />
            </figure>
            <div className="clearfix" />
            <h2 className="text-black font-xss lh-3 fw-700 mt-3 mb-1">
              {appUser.name}
            </h2>
            <h4 className="text-grey-500 font-xssss mt-0">
              <span className="d-inline-block bg-success btn-round-xss m-0" />{" "}
              Online
            </h4>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
  );
}
