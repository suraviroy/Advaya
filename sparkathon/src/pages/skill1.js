import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './skill1.css'; 
const Skill1 = () => {
  const [data,setData]=React.useState(localStorage.getItem('id'));
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name');
  const college = queryParams.get('college');
  const department = queryParams.get('department');

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const skillOptions = [
    'c',
    'python',
    'java',
    'c++',
    'machine Learning',
    'artificial Intelligence',
    'web Development',
    'react-Js',
    'node-Js',
    'flutter',
    'firebase',
    'app Development'

  ];
  React.useEffect(()=>{
    console.log(data);
  },[data])

  const handleAddSkill1 = async (event) => {
    // if (newSkill.trim() !== '' && !selectedSkills.includes(newSkill)) {
    //   setSelectedSkills([...selectedSkills, newSkill]);
    //   setNewSkill('');
    // }
    event.preventDefault();
    const response = await fetch('http://localhost:8081/demo1', {
        method: 'POST',
        body: JSON.stringify({data,newSkill}),
        // body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json'
         }
    })
    // Assuming you have the necessary checks before navigating
    const data1 = await response.json();
    console.log(data1);
    if (newSkill.trim() !== '' && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill('');
    }
    // alert(data1.message);
    };

  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '' && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill('');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // setSelectedSkills([]);
    // setSelectedFile('');
    setShowMessage(true);
  };
  

  return (
    <div className="container89">
      <div className='imagebg'>
      <div className = "photobg"></div>
      <div className='detailsbg'>
      <div className='details67'>
      <h1 className='skillbg'>Showcase Your Skills</h1>
        <p>Name: {name}</p>
        <p>College: {college}</p>
        <p>Department: {department}</p>
        <div
          className = "heading45">
             <p>Select Your Preferred Coding Languages</p>
        </div>
       
      </div>
      <div className="select-container">
        <label className='lang78'>Choose the language:</label>
        <select value={newSkill} onChange={handleSkillChange}>
          <option value="">Select a skill</option>
          {skillOptions.map((skill, index) => (
            <option key={index} value={skill}>
              {skill}
            </option>
          ))}
        </select>
        
        <button className="skill-button58" onClick={handleAddSkill1}>Add Skill</button>
        
      
      </div>

      
      <ul className="selected-skills">
        {selectedSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    
      <div className="file-upload-container">
        <label className='file34'>Upload your picture:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <h1>Selected Skills</h1>
      <div className="file-upload-container">
        <label className='file34'>Submit any certificate:</label>
        <input type="file" onChange={handleFileChange} />
        <button className="submit-button54" onClick={handleSubmit}>Save</button>
      </div>
      {showMessage && (
        <div className="message-container56">
        <p>Congratulations! You Are selected for the test round!</p>
        <Link
          to={{
            pathname: '/test',
            search: `?name=${name}&college=${college}&department=${department}`,
            
          }}
        >
          <button className="attempt-button67">Attempt now</button>
        </Link>
      </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default Skill1;
