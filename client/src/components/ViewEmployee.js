import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getEmployeeById } from "../actions/addEmployee";

const ViewEmployee = () => {
    const history = useHistory();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        id: id,
        employee: [],
    });

    const { employee } = formData;

    useEffect(() => {
        const viewDetails = async () => {
            const employeeData = await getEmployeeById(id);
            setFormData({
                ...formData,
                employee: employeeData,
            });
        };
        viewDetails();
    });

    const handleHomePage = (e) => {
        e.preventDefault();
        history.push(`/employees`);
    };

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details </h3>
                <div className="card-body">
                    <div className="row">
                        <label> Employee First Name:</label>
                        <div>{employee.firstName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Last Name:</label>
                        <div>{employee.lastName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Emai:</label>
                        <div>{employee.emailId}</div>
                    </div>
                </div>
                <button
                    className="btn btn-info"
                    onClick={(e) => handleHomePage(e)}
                >
                    Back to Home Page
                </button>
            </div>
        </div>
    );
};

export default ViewEmployee;
