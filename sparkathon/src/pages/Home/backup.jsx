import styles from "./styles.module.css";

function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`http://localhost:8080/auth/logout`, "_self");
	};
	return (
		<div className={styles.container1001}>
			<h1 className={styles.heading1001}>Home</h1>
			<div className={styles.form_container1001}>
				<div className={styles.left1001}>
					<img className={styles.img1001} src=".https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png" alt="profile" />
				</div>
				<div className={styles.right1001}>
					<h2 className={styles.from_heading1001}>Profile</h2>
					<img
						src={user.picture}
						alt="profile"
						className={styles.profile1001}
					/>
					<input
						type="text"
						defaultValue={user.name}
						className={styles.input1001}
						placeholder="UserName"
					/>
					<input
						type="text"
						defaultValue={user.email}
						className={styles.input1001}
						placeholder="Email"
					/>
					<button className={styles.btn1001} onClick={logout}>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;