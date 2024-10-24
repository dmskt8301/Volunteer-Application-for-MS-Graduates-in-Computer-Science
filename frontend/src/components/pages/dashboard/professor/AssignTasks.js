import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";

const students = [
  { value: "Jordan Bradtke", label: "Jordan Bradtke" },
  { value: "Virgil Bailey", label: "Virgil Bailey" },
  { value: "Daniel Bartell", label: "Daniel Bartell" },
  { value: "Sophia Reichert", label: "Sophia Reichert" },
  { value: "Rose Littel MD", label: "Rose Littel MD" },
];

function AssignTasks() {

  const navigate = useNavigate();

  const [selectedStudent, setSelectedStudent] = useState([]);

  const handleStudentSelection = (selectedValues) => {
    setSelectedStudent(selectedValues);
  };

  return (
    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
      <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
        <Link onClick={() => navigate(-1)} className="d-inline-block mt-2">
          <i className="ti-arrow-left font-sm text-white" />
        </Link>
        <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
          Assign Tasks
        </h4>
      </div>
      <div className="card-body pl-lg-5 pr-lg-5 w-100 table-responsive-sm">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="bg-current text-white rounded-lg">Task ID</th>
              <th className="bg-current text-white rounded-lg">Task Name</th>
              <th className="bg-current text-white rounded-lg">Priority</th>
              <th className="bg-current text-white rounded-lg">Deadline</th>
              <th className="bg-current text-white rounded-lg">Description</th>
              <th className="bg-current text-white rounded-lg">Assign Student</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Task 1</td>
              <td>Low</td>
              <td>01 May 2024</td>
              <td>This is a description</td>
              <td>
                <Select
                  options={students}
                  value={selectedStudent}
                  onChange={handleStudentSelection}
                  placeholder="Select Student"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignTasks;
