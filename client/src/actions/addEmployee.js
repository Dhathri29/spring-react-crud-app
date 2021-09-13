import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

const addEmployee = async (formData, history) => {
    const res = await axios.post(EMPLOYEE_API_BASE_URL, formData);
    history.push("/employees");
    return res.data;
};

const getEmployeeById = async (employeeId) => {
    const res = await axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
    return res.data;
};

const updateEmployee = async (employee, employeeId, history) => {
    const res = await axios.put(
        `${EMPLOYEE_API_BASE_URL}/${employeeId}`,
        employee
    );
    history.push("/employees");
    return res;
};

export { addEmployee, getEmployeeById, updateEmployee };
