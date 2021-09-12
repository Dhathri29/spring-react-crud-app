import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import addEmployee from '../actions/addEmployee';

const AddEmployee = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });

    const{
        firstName,
        lastName,
        emailId
    } = formData;

    const handleAddEmployee = (e) => {
        
        setFormData({
            ...formData,
           [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addEmployee(formData,history);
    }
    const handleCancel = () =>{
        history.push("/employees")
    }
    return (
        <div>
            <div className ="container">
                <div className ="row">
                    <div className ="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> Add Employee</h3>
                        <div className ="card-body">
                            <form>
                            <div className ="form-group">
                                <label> First Name: </label>
                                <input placeholder = "First Name" name="firstName" className="form-control"
                                value={firstName} onChange={handleAddEmployee}/>
                             </div>
                             <div className ="form-group">
                                <label> Last Name: </label>
                                <input placeholder = "Last Name" name="lastName" className="form-control"
                                value={lastName} onChange={ handleAddEmployee}/>
                             </div>
                             <div className ="form-group">
                                <label> Email Id: </label>
                                <input placeholder = "Email Id" name="emailId" className="form-control"
                                value={emailId} onChange={ handleAddEmployee}/>
                             </div> 
                             <button className="btn btn-success" onClick={ handleSubmit}>Save</button>  
                             <button className="btn btn-danger" onClick={ handleCancel}>Cancel </button>  

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
