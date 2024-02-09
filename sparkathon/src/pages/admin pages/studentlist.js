
import React from "react";
import Table from "react-bootstrap/Table";
//import { data } from "./data.js";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './hubs.css'
//import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import axios from 'axios'

function Studentlist(props) {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    //const [data, setData] = React.useState(localStorage.getItem('token'));
    //const [access, setAccess] = React.useState(false);
    console.log(search);


    const getUsers = async () => {
        const response = await fetch('http://localhost:8081/demo', {
            method: 'GET',
        })
        const data = await response.json();
        setUsers(data.data);
    }

    React.useEffect(() => {
        getUsers();
    }, [])
    // React.useEffect(()=>{
    //     const options = {
    //         method: "GET",
    //         url: "http://localhost:8081/demo",
    //         //params: { token: data },
    //         headers: {"Authorization" : `Bearer ${data}`},
    //       };
    //       axios
    //       .request(options)
    //         .then((response) => {
    //           console.log(response);
    //           if(response.data){
    //             setAccess(response.data);
    //             }
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //         });
    //     },[data]);
    //     React.useEffect = async ()=>{
    //         await axios.request();
    //         console.log(access);
    //         };

    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="vvvv1">
            {/* <div className="yyy1"><Navvv /></div> */}
            <div className="liss">
                <Table striped bordered hover variant="" className="hello" >
                    <thead>
                        <tr>
                            <th><h2>Student Name </h2></th>
                            <th><h2>College</h2></th>
                            <th><h2>Student ID</h2></th>
                            <th className="s1w"><h2>Department</h2></th>
                            <th className="s1w"><h2>Email</h2></th>
                            {/* <th className="s1w"><h3>City</h3></th> */}
                            <th className="s1w"><h2>Level</h2></th>

                            <div className="serc">

                                <input
                                    type="search"
                                    className="search11"
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search for Skills"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                            </div>
                            <th className="s1w"><h2>More Info</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users
                            .filter((user) => {
                                return search.toLowerCase() === ""
                                    ? user
                                    : user.skills.toLowerCase().includes(search);
                            })
                            .map((user) => (
                                <tr >

                                    <td>{user.name}</td>
                                    <td>{user.clg}</td>
                                        <td>{user.studentid}</td>
                                        <td>{user.department}</td>
                                        <td>{user.email}</td>
                                        <td>{user.badge}</td>
                                        <td>{user.skills}</td>

                                    <td >
                                        <Button className='a479' variant="primary">More</Button>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                    
                </Table>
            </div>
        </div>
        //     <div>
        //     <ul>
        //       {users.map(user=><li key={user._id}>{user.name},{user.clg}</li>)}
        //     </ul>
        //   </div>
    );
}
export default Studentlist;