import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
    addEmployee,
    getEmployeeById,
    updateEmployee,
} from "../actions/addEmployee";

const AddEmployee = () => {
    const history = useHistory();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const { firstName, lastName, emailId } = formData;

    const handleAddEmployee = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id === "_add") {
            await addEmployee(formData, history);
        } else {
            await updateEmployee(formData, id, history);
        }
    };
    const handleCancel = () => {
        history.push("/employees");
    };

    useEffect(() => {
        if (id === -1) {
            return;
        } else {
            const getEmployee = async () => {
                const employee = await getEmployeeById(id);

                setFormData({
                    ...formData,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId,
                });
            };
            getEmployee();
        }
    }, [getEmployeeById]);

    const getTitle = () => {
        if (id === "_add") {
            return <h3 className="text-center"> Add Employee</h3>;
        } else {
            return <h3 className="text-center"> Update Employee</h3>;
        }
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={handleAddEmployee}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={handleAddEmployee}
                                    />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input
                                        placeholder="Email Id"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={handleAddEmployee}
                                    />
                                </div>
                                <button
                                    className="btn btn-success mr-3"
                                    onClick={handleSubmit}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={handleCancel}
                                >
                                    Cancel{" "}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;
