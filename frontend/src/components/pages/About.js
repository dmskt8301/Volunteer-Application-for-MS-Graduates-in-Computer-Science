export default function About() {
  return (
    <div>
      <div className="about-wrapper bg-lightblue pb-lg--7 pt-lg--7 pt-5 pb-7 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-2 mb-0 mt-3 d-block lh-3">
                About Us
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4 className="fw-500 mb-4 lh-30 font-xsss text-grey-500 mt-0">
                Given the difficulties of the economy, a lot of students find themselves trap without a job after graduating.
                In order to protect, our international students the government designed a volunteer program.
                This program runs under each one of the our depts.
                Professors have to agree to supervise volunteers and to report their performance to the department and to inmigration.
                Once, students find a job, they are released from the portal. Volunteer is a serious task.
                It requires a supervisor, a task to be research or implement it, 21 hrs of weekly work and a weekly report.
                It is also a volunteer activity for professors to participate on it.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-work">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <img
                src="images/fogg-clip.png"
                alt="about"
                className="rounded-lg img-fluid pt-lg--5"
              />
            </div>
            <div className="col-lg-6 offset-lg-1 page-title style1">
              <h2 className="fw-700 text-grey-800 display1-size display2-md-size lh-3 pt-lg--5">
                Key Features
              </h2>
              <p className="fw-500 text-grey-500 lh-28 mt-3">
                Volunteer is a program that helps students to be more productive.
                Their job is to be part of the team and to be in charge of their tasks.
              </p>
              <h4 className="fw-600 font-xs mt-4">
                <i className="ti-check btn-round-xs text-white bg-success mr-2 border" />
                Individual Progress Tracking
              </h4>
              <h4 className="fw-600 font-xs">
                <i className="ti-check btn-round-xs text-white bg-success mr-2 border" />
                Data-Driven Insights
              </h4>
              <h4 className="fw-600 font-xs">
                <i className="ti-check btn-round-xs text-white bg-success mr-2 border" />
                Continuous Feedback
              </h4>
              <h4 className="fw-600 font-xs">
                <i className="ti-check btn-round-xs text-white bg-success mr-2 border" />
                Weekly Reports
              </h4>
              <h4 className="fw-600 font-xs">
                <i className="ti-check btn-round-xs text-white bg-success mr-2 border" />
                AI Anti-Cheating Mechanism
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
