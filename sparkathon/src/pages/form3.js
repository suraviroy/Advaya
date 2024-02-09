import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Popup from 'reactjs-popup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form3.css";
import { Modal } from 'react-responsive-modal';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";
import Navvv from "./navvv";
import { useNavigate } from 'react-router-dom';


export default function Form3(props) {
    const [suravi, setSuravi] = React.useState("C1");
    const [suravi1, setSuravi1] = React.useState("C2");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    // console.log(watch('username'));
    React.useEffect(() => {
        console.log(props.user);
    })
    function hidee(e) {
        let namee = e.target.name;
        let u = e.target.value;
        console.log(u);
        setUserData(() => { return { ...userData, [namee]: u } });
        if (u === "monthly") {
            console.log("C2");
            setSuravi1("C2");
        }
        else {
            console.log("C1");
            setSuravi("C1");
        }
    }
    const [userData, setUserData] = useState({
        Name: "",
        PhoneNumber: "",
        location: "",
        Date: "",
        Time1: "",
        Option: ""
    });

    let date, value;
    const postUserData = (event) => {
        // date = event.target.date;
        date = event.target.name;
        value = event.target.value;
        console.log("name " + date);
        setUserData(() => { return { ...userData, [date]: value } });
    };
    const Navigate = useNavigate();
    const submitData = async (event) => {
        event.preventDefault();
        const { Name,
            PhoneNumber,
            location,
            Date,
            Time1, Option } = userData;
        console.log(userData);
        if (Name && PhoneNumber && location && Date && Time1) {
            const res = fetch("https://service-e43c3-default-rtdb.firebaseio.com/Monthly.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Name,
                    PhoneNumber,
                    location,
                    Date,
                    Time1,
                    
                }),
            });
            if (res) {
                setUserData({
                    Name,
                    PhoneNumber,
                    location,
                    Time1,
                    Date
                });
                
                Navigate("/Home")
            }
            else {
                alert("Plz fill the data");
            }
        } 
        else {
            alert("Plz fill the data");
        }
       
            
        
    };
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [state, setState] = useState({
        card: "",
        card1: "",
        card2: "",
        card3: "",
        card4: "",
        card5: "",
    });

    const { card, card1, card2, card3, card4, card5 } = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    
      
    return (
        <div className="iiiv1">
            <div className="ssu">    <Navvv /></div>

            <div className="iiiv44">

                <section className=" sec12" >
                    <div className="register321">
                        <div className="col-1110">
                            <div className="e">
                                <h2 className="ccc1">PROVIDE FOOD MONTHLY</h2>
                                <span className="ccc1">Fill up the form to get the service</span>
                            </div>
                            <form
                                id="form"
                                className="flex flex-col1110"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input type="text" name="Name" {...register("Name")} placeholder="Name" value={userData.Name}
                                    onChange={postUserData} />
                                <input
                                    name="PhoneNumber"
                                    type="text"
                                    {...register("PhoneNumber")}
                                    placeholder="Phone Number"
                                    value={userData.PhoneNumber}
                                    onChange={postUserData}
                                />
                                <input
                                    type="text"
                                    name="location"
                                    {...register("location", { required: true, maxLength: 10 })}
                                    placeholder="location"
                                    value={userData.location}
                                    onChange={postUserData}
                                />
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label className="ccc1">Service</Form.Label>
                                    <Form.Select defaultValue="Choose your date" name="Date" {...register("Date")} onChange={hidee}>
                                        <option value="">Choose your date</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                    </Form.Select>
                                </Form.Group>
                                {/* <Form.Select defaultValue="Choose" className="suravi" name= "su" value={userData.su} onChange={postUserData}>
                                    <option value="normal">Option</option>
                                    <option value="normal">Monday</option>
                                    <option value="sos">Tuesday</option>
                                </Form.Select>
                                <Form.Select defaultValue="Choose" className="suravi1" name= "su1" value={userData.su1} onChange={postUserData}>
                                    <option value="normal">Option</option>
                                    <option value="normal">1</option>
                                    <option value="sos">2</option>
                                </Form.Select> */}
                                {/* <Form.Label className="ccc1">Pick your date</Form.Label>
                                <input

                                    name="Date1"
                                    type="date"
                                    {...register("Date1")}
                                    value={userData.Date1}
                                    onChange={postUserData}
                                /> */}
                                {/* <DatePicker
                    name="Date1"
                    {...register("Date1")}
                    value={userData.Date1}
                    onChange={postUserData}
                   placeholderText="MM/DD/YYYY"
                  selectsStart */}
                                {/* // startDate={startDate}
                  // excludeDates={datesBlock.map((ele)=>{return(new Date(ele))})}
                  // endDate={endDate}
                  // minDate={startDate2}
                // /> */}
                                <Form.Label className="ccc1">Time</Form.Label>
                                <input
                                    name="Time1"
                                    type="time"
                                    {...register("Time1")}
                                    value={userData.Time1}
                                    onChange={postUserData}
                                />
                                <button className="bb10" onClick={submitData}>Donate Now</button>

                            </form>
                        </div>

                    </div>
                </section>
                {/* <div >
                    <img className="col-imgg" src="https://files.globalgiving.org/pfil/5067/ph_5067_93067.jpg?m=1479657926000" alt="" />
                </div> */}
            </div>
        </div>
    );
}