import React, {useState} from "react";
import Cancel from '../assets/images/combined-shape.png';

export default function AssignDoctors({data, handleSelDoctor,handleAssignDoctor}) {
    const [formData, setFormData] = useState({...data})
    const handleAssign = e => {
        e.preventDefault();
        handleAssignDoctor(formData);
    }

    const handleInputChange = e => {
        let list = {...formData};
        list[e.target.name] = e.target.value;
        setFormData(list)
    }
    return(
        <div style={{ border:"1px solid #1f1f1f" }}>
            <div className="list-doctor">
                <img src={data.img} alt="doctor" />
                <span className="doctor-name">{data.name}</span>
                <span className="doctor-type">{data.type}</span>
                <img src={Cancel} alt="Cancel" className="icon" onClick={() => handleSelDoctor(formData)} />
            </div>
            <form onSubmit={handleAssign}>
                <input type="text" placeholder="Roles" name="role" required onChange={handleInputChange} />
                <div className="inp-container">
                    <input type="text" placeholder="Provider no" name="providerNo" required onChange={handleInputChange} />
                    <input type="text" placeholder="BUPA ID" name="bupaId" required onChange={handleInputChange} />
                </div>
                <input type="text" placeholder="Linked bank account" name="bankAccount" required onChange={handleInputChange} />
                <input type="text" placeholder="Linked users" name="linkedUser" required onChange={handleInputChange} />
                <button className="btn" type="submit">Assign</button>
            </form>      
        </div>
    )

}