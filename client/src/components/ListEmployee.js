import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import getEmployees from "../actions/ListEmployee";

const ListEmployee = () => {
    const history = useHistory();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        employees: [],
    });

    const { employees } = formData;

    console.log(formData);

    useEffect(() => {
        const getDetails = async () => {
            const employeeData = await getEmployees();
            setFormData({
                ...formData,
                employees: employeeData,
            });
        };
        getDetails();
    }, [getEmployees]);

    const handleAddEmployee = () => {
        history.push("/add/_add");
    };

    const handleUpdateEmployee = (id) => {
        history.push(`/add/${id}`);
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
                                        className="btn btn-primary"
                                        onClick={() =>
                                            handleUpdateEmployee(employee.id)
                                        }
                                    >
                                        Update
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
