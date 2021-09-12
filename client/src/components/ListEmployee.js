import React, { useEffect, useState } from "react";

import getEmployee from "../actions/ListEmployee";

const ListEmployee = () => {
    const [formData, setFormData] = useState({
        employees: [],
    });

    const { employees } = formData;

    console.log(formData);

    useEffect(() => {
        const getDetails = async () => {
            const employeeData = await getEmployee();
            setFormData({
                ...formData,
                employees: employeeData,
            });
        };
        getDetails();
    }, [getEmployee]);

    return (
        <div>
            <h2 className="text-center">Employee List</h2>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployee;
