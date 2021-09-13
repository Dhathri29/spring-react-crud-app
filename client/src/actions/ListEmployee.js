import axios from "axios";

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

const getEmployees = async () => {
    const res = await axios.get(`/employees`);

    return res.data;
};

export default getEmployees;
