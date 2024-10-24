function Home() {
  return (
    <div>
      <div className="banner-wrapper bg-lightblue">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 order-lg-2">
              <img
                src="images/background.png"
                alt="background"
                className="pt-lg--10 w-100 aos-init"
                data-aos="zoom-in"
                data-aos-delay={200}
                data-aos-duration={500}
              />
            </div>
            <div className="col-xl-6 col-lg-7 order-lg-1 pt-lg--10 pb-lg--10">
              <h2
                className="display3-size display2-md-size fw-700 aos-init"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={500}
              >
                Monitor Student Volunteer Activities
              </h2>
              <h4
                className="text-grey-600 font-xsss fw-500 ml-1 aos-init lh-24"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={500}
              >
                Track 21 Hours of Weekly Work/Tasks
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-work pt-lg--5 pb-lg--7 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
              <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                Our Objectives
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card p-4 border-0 text-center d-block arrow-right">
                <svg
                  className="position-absolute top-0"
                  style={{ marginLeft: "-44px", opacity: "0.2" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="125.062"
                  height="88.62"
                  viewBox="0 0 125.062 88.62"
                >
                  <path
                    style={{ fill: "#ffb09f" }}
                    d="M488.806,2544.02s35.988-16.17,53.518-7.45S565,2541.44,574,2549s18.09,19.21,14.009,41.12c-3.62,19.44-25.466,15.87-37.2,27.79-10.557,10.72-68.616,1.88-74.4-12.88-6.841-17.45-13.114-17.84-12.406-34.03C464.452,2560.66,475.315,2554.71,488.806,2544.02Z"
                    transform="translate(-463.938 -2534)"
                  />
                </svg>
                <i className="feather-layers display1-size position-relative z-index text-warning" />
                <h2 className="font-md fw-700 text-grey-900 mt-5 mb-3">
                  Task Management
                </h2>
              </div>
            </div>
            <div className="col-lg-4 arrow-right">
              <div className="card p-4 border-0 text-center d-block">
                <svg
                  className="position-absolute top-0"
                  style={{ marginLeft: "-44px", opacity: "0.2" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="125.062"
                  height="88.62"
                  viewBox="0 0 125.062 88.62"
                >
                  <path
                    style={{ fill: "#ad78ef" }}
                    d="M488.806,2544.02s35.988-16.17,53.518-7.45S565,2541.44,574,2549s18.09,19.21,14.009,41.12c-3.62,19.44-25.466,15.87-37.2,27.79-10.557,10.72-68.616,1.88-74.4-12.88-6.841-17.45-13.114-17.84-12.406-34.03C464.452,2560.66,475.315,2554.71,488.806,2544.02Z"
                    transform="translate(-463.938 -2534)"
                  />
                </svg>
                <i className="feather-database display1-size position-relative z-index text-secondary" />
                <h2 className="font-md fw-700 text-grey-900 mt-5 mb-3">
                  Weekly Performance Reports
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card p-4 border-0 text-center d-block">
                <svg
                  className="position-absolute top-0"
                  style={{ marginLeft: "-44px", opacity: "0.2" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="125.062"
                  height="88.62"
                  viewBox="0 0 125.062 88.62"
                >
                  <path
                    style={{ fill: "#3ed2a7" }}
                    d="M488.806,2544.02s35.988-16.17,53.518-7.45S565,2541.44,574,2549s18.09,19.21,14.009,41.12c-3.62,19.44-25.466,15.87-37.2,27.79-10.557,10.72-68.616,1.88-74.4-12.88-6.841-17.45-13.114-17.84-12.406-34.03C464.452,2560.66,475.315,2554.71,488.806,2544.02Z"
                    transform="translate(-463.938 -2534)"
                  />
                </svg>
                <i className="feather-award display1-size position-relative z-index text-success" />
                <h2 className="font-md fw-700 text-grey-900 mt-5 mb-3">
                  Job Opportunity
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-work pb-lg--7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
              <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                Our Features
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card w-100 border-0 p-4 text-center d-block shadow-xss rounded-xxl">
                <div className="card-image p-4 bg-lightblue rounded-xxl"><img src="images/bg-2.png" alt="feature-1" className="img-fluid p-4" /></div>
                <h2 className="font-md fw-700 text-grey-900 mt-4 mb-0">Tasks</h2>
                <p className="fw-300 font-xssss lh-28 text-grey-500 p-3">Graduates who are volunteers will be assigned tasks with proper deadlines to achieve their goals. This will also help them achieve Recommendation Letters from their professors.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card w-100 border-0 p-4 text-center d-block shadow-xss rounded-xxl">
                <div className="card-image p-0 bg-lightblue rounded-xxl"><img src="images/bg-44.png" alt="feature-2" className="img-fluid" /></div>
                <h2 className="font-md fw-700 text-grey-900 mt-4 mb-0">Feedback on Reports</h2>
                <p className="fw-300 font-xssss lh-28 text-grey-500 p-3">Professors will give feedback on the performance of the students through reports which are submitted by the students every week to ensure that they are on track and 21 hours per week criteria are met.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card w-100 border-0 p-4 text-center d-block shadow-xss rounded-xxl">
                <div className="card-image p-0 bg-lightblue rounded-xxl"><img src="images/urban-854.png" alt="feature-3" className="img-fluid" /></div>
                <h2 className="font-md fw-700 text-grey-900 mt-4 mb-0">AI based QA</h2>
                <p className="fw-300 font-xssss lh-28 text-grey-500 p-3">AI based Quality Analysis of the work/task done by the students is evaluated by the professors to prevent students from cheating and making sure that Anti-Cheating policy is followed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
