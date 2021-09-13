import axios from "axios";

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

const addEmployee = async (formData, history) => {
    const res = await axios.post(`/employees`, formData);
    history.push("/employees");
    return res.data;
};

const getEmployeeById = async (employeeId) => {
    const res = await axios.get(`/employees/${employeeId}`);
    return res.data;
};

const updateEmployee = async (employee, employeeId, history) => {
    const res = await axios.put(`/employees/${employeeId}`, employee);
    history.push("/employees");
    return res;
};

const deleteEmployee = async (employeeId, history) => {
    const res = await axios.delete(`/employees/${employeeId}`);
    return res;
};

export { addEmployee, getEmployeeById, updateEmployee, deleteEmployee };
