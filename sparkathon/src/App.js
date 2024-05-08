// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./homepage";
import Form1 from "./pages/form1";
import Form3 from "./pages/form3";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Skill from "./pages/skill1";
import Test from "./pages/test";
import Member from "./pages/member";
import Admin from "./pages/admin";
import Feedback from './pages/feedback';

function App() {
	const [user, setUser] = useState(null);
	const getUser = async () => {
		try {
			const url = `http://localhost:8080/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		console.log(user);
		// if (user){
		//   window.location.replace('http://localhost:3000/')
		// }
		getUser();

	}, [user]);
	return (
		<div className="App">
			<Routes>
				<Route

					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/Home" />}
				/>
				{/* <Route
					exact
					path="/"
					element={user ? <Navigate to="/" /> : <Homepage />}
				/> */}
				<Route
					exact
					path="/form1"
					element={<Form1 user={user} />}
				/>
				<Route
					exact
					path="/form3"
					element={<Form3 user={user} />}
				/>
				<Route
					exact
					path="/skill1"
					element={<Skill user={user} />}
				/>
				<Route
					exact
					path="/test"
					element={<Test user={user} />}
				/>
				
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
				<Route
					exact
					path="/Home"
					element={user ? <Navigate to="/" /> : <Homepage />}
				/>
				<Route
					exact
					path="/12365478911"
					element={<Member />}
				/>
				<Route
					exact
					path="/admin"
					element={<Admin user={user} />}
				/>
				<Route
					exact
					path="/feedback"
					element={<Feedback user={user} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
