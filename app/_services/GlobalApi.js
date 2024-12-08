const { default: axios } = require("axios");

const GetAllGrades = () => axios.get("/api/grade");
const CreateNewStudent = (data) => {
  return axios.post("/api/students", data);
};

export default { GetAllGrades, CreateNewStudent };
