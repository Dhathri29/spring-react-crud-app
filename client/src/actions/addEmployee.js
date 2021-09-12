import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

const addEmployee = (formData,history) => {
    const res =  axios.post(EMPLOYEE_API_BASE_URL, formData);
    console.log(res);
    history.push("/employees");
    return res.data;
}

export default addEmployee