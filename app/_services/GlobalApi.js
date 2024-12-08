const { default: axios } = require("axios");

const GetAllGrades = () => axios.get("/api/grade");
const CreateNewStudent = (data) => {
  return axios.post("/api/students", data);
};

const GetAllStudents = () => axios.get("/api/students");

export default { GetAllGrades, CreateNewStudent, GetAllStudents };
