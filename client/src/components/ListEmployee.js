import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteEmployee } from "../actions/addEmployee";

import getEmployees from "../actions/ListEmployee";

const ListEmployee = () => {
    const history = useHistory();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        employees: [],
    });

    const { employees } = formData;

    useEffect(() => {
        const getDetails = async () => {
            const employeeData = await getEmployees();
            setFormData({
                ...formData,
                employees: employeeData,
            });
        };
        getDetails();
    });

    const handleAddEmployee = () => {
        history.push("/add/_add");
    };

    const handleUpdateEmployee = (id) => {
        history.push(`/add/${id}`);
    };
    const handleDeleteEmployee = (id) => {
        deleteEmployee(id, history);
        history.push("/employees");
    };

    return (
        <div>
            <h2 className="text-center">Employee List</h2>
            <div className="row">
                <button
                    className="btn btn-primary"
                    onClick={() => handleAddEmployee()}
                >
                    Add Employee
                </button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td> {employee.firstName}</td>
                                <td> {employee.lastName}</td>
                                <td> {employee.emailId}</td>
                                <td>
                                    <button
                                        className="btn btn-primary mr-3"
                                        onClick={() =>
                                            handleUpdateEmployee(employee.id)
                                        }
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            handleDeleteEmployee(employee.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployee;
