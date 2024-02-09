import { background } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Signup() {
	const googleAuth = () => {
		window.open(
			`http://localhost:8080/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div className={styles.container1001} >
			<h1 className={styles.heading1001}>Sign up Form</h1>
			<div className={styles.form_container1001}>
				<div className={styles.left1001}>
					<img className={styles.img1001} src="https://res.cloudinary.com/dosofpk8l/image/upload/v1692092584/No_starve__4_-removebg-preview_esyte9.png" alt="signup" />
				</div>
				<div className={styles.right1001}>
					<h2 className={styles.from_heading1001}>Create Account</h2>
					<input type="text" className={styles.input1001} placeholder="Username" />
					<input type="text" className={styles.input1001} placeholder="Email" />
					<input
						type="password"
						className={styles.input1001}
						placeholder="Password"
					/>
					<button className={styles.btn1001}>Sign Up</button>
					<p className={styles.text1001}>or</p>
					<button className={styles.google_btn1001} onClick={googleAuth}>
						<img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="google icon" />
						<span>Sign up with Google</span>
					</button>
					<p className={styles.text1001}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;