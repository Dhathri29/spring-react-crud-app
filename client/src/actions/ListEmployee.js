import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

const getEmployees = async () => {
    const res = await axios.get(EMPLOYEE_API_BASE_URL);

    return res.data;
};

export default getEmployees;
