import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './form1.css';
import { useNavigate } from "react-router-dom";
import Navvv from './navvv';


const Form1 = () => {
    const [form, setForm] = useState({});
    const [name, setName] = useState('');
    const [institution, setInstitution] = useState('TECHNO INTERNATIONAL NEW TOWN');
    const [email, setEmail] = useState('');
    const [studentId, setStudentId] = useState('');
    const [department, setDepartment] = useState('CSE');
    const [startingYear, setStartingYear] = useState('');
    const [passOutYear, setPassOutYear] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [exist, setexist] = useState(false);


    const handleNameChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
        //console.log(name);
    };

    const handleEmailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value);
    };

    const handleStudentIdChange = (event) => {
        setStudentId(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleStartingYearChange = (event) => {
        setStartingYear(event.target.value);
    };

    const handlePassOutYearChange = (event) => {
        setPassOutYear(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleInstitutionChange = (event) => {
        setInstitution(event.target.value);
    };

    const yearRange = Array.from({ length: new Date().getFullYear() - 1994 }, (_, index) => 1995 + index);

    const institutionOptions = [
        'TECHNO INTERNATIONAL NEW TOWN',
        'RCC INSTITUTE OF INFORMATION TECHNOLOGY',
        'MEGHNAD SAHA INSTITUTE OF TECHNOLOGY',
        'HERITAGE INSTITUTE OF TECHNOLOGY'
    ];
    const Navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Navigate("/skill1")
        const response = await fetch('http://localhost:8081/demo', {
            method: 'POST',
            body: JSON.stringify({name,institution,email,studentId,department,phoneNumber}),
            // body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
             }
        })
        // Assuming you have the necessary checks before navigating
        const data = await response.json();
        console.log(data);
        if(data.message==="user already exist")
        {
            setexist(true)
        }

        else if(data.data.studentid)
        {
            localStorage.setItem("id",data.data.studentid)
            setexist(false)
            navigateToSkillPage();
        }
        // navigateToSkillPage();
        //Navigate("/skill1")
    };

    const navigate = useNavigate();

    const navigateToSkillPage = () => {
        const queryParams = new URLSearchParams();
        queryParams.append('name', name);
        queryParams.append('college', institution);
        queryParams.append('department', department);

        navigate(`/skill1?${queryParams.toString()}`);
    };
    return (
        <div>
            <div className='ikk12'><Navvv /></div>

        <form className="form-container05">
            <div className='formbg01'>
            
            <h2 className="form-heading">Name</h2>

            <label className="form-label" htmlFor="nameInput">
                Enter your name:
            </label>
            <input
                className="form-input"
                type="text"
                id="nameInput"
                value={name}
                onChange={handleNameChange}
                placeholder="Your Name"
            />
            <h2 className="form-heading">Institution Name</h2>
            <div className="form-row">
            <label className="form-label" htmlFor="institutionSelect">
                Select Institution:
            </label>
            <select className="form-select" id="institutionSelect" value={institution} onChange={handleInstitutionChange}>
                <option value="">Select an institution</option>
                {institutionOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            </div>
            <h2 className="form-heading">Email</h2>
            <label className="form-label" htmlFor="emailInput">
                Enter your email:
            </label>
            <input
                className="form-input"
                type="email"
                id="emailInput"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your Email"
            />
            <h2 className="form-heading">Student ID</h2>
            {exist?<div className='uia'><p>User Id already exist</p></div>:<></>}
            
            <label className="form-label" htmlFor="studentIdInput">
                Enter your student ID:
            </label>
            <input
                className="form-input"
                type="text"
                id="studentIdInput"
                value={studentId}
                onChange={handleStudentIdChange}
                placeholder="Your Student ID"
            />
            <h2 className="form-heading">Department</h2>
            <div className="form-row">
  <label className="form-label" htmlFor="departmentSelect">
    Choose your department:
  </label>
  <select
    className="form-select2"
    id="departmentSelect"
    value={department}
    onChange={handleDepartmentChange}
  >
    <option value="CSE">CSE</option>
    <option value="IT">IT</option>
    <option value="ECE">ECE</option>
    <option value="AIML">AIML</option>
  </select>
</div>
            <h2 className="form-heading">Batch</h2>
            <div className="form-row">
            <label className="form-label" htmlFor="startingYearSelect">
                Select starting   year: 
            </label>
            <select className="form-select2" id="startingYearSelect" value={startingYear} onChange={handleStartingYearChange}>
                {yearRange.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            </div>
            <div className="form-row">
            <label className="form-label" htmlFor="passOutYearSelect">
                Select pass-out year:
            </label>
            <select className="form-select2" id="passOutYearSelect" value={passOutYear} onChange={handlePassOutYearChange}>
                {yearRange.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            </div>
            <h2 className="form-heading">Contact Information</h2>
            <label className="form-label" htmlFor="phoneNumberInput">
                Enter your phone number:
            </label>
            <input
                className="form-input"
                type="tel"
                id="phoneNumberInput"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Your Phone Number"
            />
            <div>
            <button className="form-submit-button" onClick={handleSubmit}>
                {/* <Link to="/skill1">Submit</Link> */}
                submit
            </button>
            </div>
            </div>
        </form>
        </div>
    );
};

export default Form1;
