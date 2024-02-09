
import React from "react";
import Table from "react-bootstrap/Table";
import { data } from "./data.js";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './hubs.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
//import Navvv from "./navvv";
function Hubs(props) {
    const [search, setSearch] = useState("");
    console.log(search);
    const Navigate = useNavigate();
    //   function handleClick (){
    //     Navigate ("/Booknow")
    //   }

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
                            <th><h2>Profile</h2></th>
                            <th><h2>Department</h2></th>
                            <th><h2>Year</h2></th>
                            <th className="s1w"><h2>Name</h2></th>
                            <th className="s1w"><h2>Student ID</h2></th>
                            {/* <th className="s1w"><h3>City</h3></th> */}
                            <th className="s1w"><h2>Stage</h2></th>

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
                        {data
                            .filter((item) => {
                                return search.toLowerCase() === ''
                                    ? item
                                    : item.bdss.toLowerCase().includes(search);
                            })
                            .map((item) => (
                                <tr >
                                    <td>
                                        {item.Profile1}
                                    </td>
                                    <td>{item.Name1}</td>
                                    <td>{item.id1}</td>
                                    <td>{item.Center_for}</td>
                                    <td>{item.location1}</td>
                                    <td>{item.lm}</td>
                                    <td>{item.bdss}</td>
                                    {/* <td><button>More Info</button></td> */}
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
    );
}
export default Hubs;