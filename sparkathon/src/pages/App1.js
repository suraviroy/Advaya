// // import logo from './logo.svg';
// import './App.css';
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Homepage from "./homepage";
// import Form1 from "./pages/form1";
// import Form3 from "./pages/form3";
// import Skill from "./pages/skill1";
// import Test from "./pages/test";

// function App() {
// 	const [user, setUser] = useState(null);
// 	return (
// 		<div className="App">
// 			<Routes>
// 				<Route
// 					exact
// 					path="/"
// 					element={user ? <Navigate to="/" /> : <Homepage />}
// 				/>
// 				<Route
// 					exact
// 					path="/form1"
// 					element={<Form1 user={user} />}
// 				/>
// 				<Route
// 					exact
// 					path="/form3"
// 					element={<Form3 user={user} />}
// 				/>
// 				<Route
// 					exact
// 					path="/skill1"
// 					element={<Skill user={user} />}
// 				/>
// 				<Route
// 					exact
// 					path="/test"
// 					element={<Test user={user} />}
// 				/>
// 			</Routes>
// 		</div>
// 	);
// }

// export default App;
