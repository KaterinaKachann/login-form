import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import UserSvg from "./assets/user.svg";
import "./App.scss";

type FormData = {
	FirstName: string;
	LastName: string;
	Nationality: string;
	Email: string;
	DayOfBirth: string;
	MonthOfBirth: string;
	YearOfBirth: string;
	Gender: string;
	Password: string;
	ConfirmPassword: string;
};

function App() {
	let nationality: Array<string> = [
		"American",
		"Belarusian",
		"Russian",
		"Pole",
		"German",
		"Other",
	];
	let date = {
		days: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
			22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
		],
		months: [
			"December",
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
		],
		years: [
			1990,
			1991,
			1992,
			1993,
			1994,
			1995,
			1996,
			1997,
			1998,
			1999,
			"Other",
		],
	};

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		watch,
	} = useForm<FormData>();

	const password = useRef({});
	password.current = watch("Password", "");

	const [success, setSuccess] = useState(false);
	const [shake, setShake] = useState(false);

	const handleSubmitForm = (data: any) => {
		let fileData = JSON.stringify(data);
		fileData.length > 0 ? setSuccess(true) : setSuccess(false);

		const blob = new Blob([fileData], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.download = "server-ok.json";
		link.href = url;
		link.click();
		reset();
	};

	const openForm = () => {
		setSuccess(false);
	};

	const animate = () => {
		setShake(true);
		setTimeout(() => setShake(false), 1000);
	};

	return (
		<main className="container">
			<div className="form-conatiner">
				<header className="form-container__title">
					<h1 className="form-container__title-main">Sign up</h1>
				</header>
				{success ? (
					<div className="success-container">
						<div className="success-container__content-title-subtitle ">
							<h1 className="title">Thank you</h1>
							<p className="subtitle">you registered!</p>
						</div>
						<div className="form-container__content-submit">
							<div className="form-container__content-login">
								<p>
									Have an account?{" "}
									<button className="btn-login" onClick={openForm}>
										Login
									</button>
								</p>
							</div>
						</div>
					</div>
				) : (
					<section className="form-container__content">
						<div className="svg-bkg">
						<svg
							width="307"
							height="355"
							viewBox="0 0 307 355"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
							fill="none" stroke="#F9FAFF" stroke-width="6"
								className="pathOne"
								fill-rule="evenodd"
								d="M205.5 411C92.236 411 0 318.764 0 205.5C0 92.236 92.236 0 205.5 0C318.764 0 411 92.236 411 205.5C411 271.362 379.812 330.113 331.438 367.754C333.781 365.394 335.295 362.201 335.521 358.578C336 354.751 336 351.881 336 348.533V343.749C335.879 337.683 335.35 331.725 334.44 325.901C363.927 294.343 382 251.99 382 205.5C382 108.186 302.814 29 205.5 29C108.186 29 29 108.186 29 205.5C29 252.377 47.3746 295.047 77.2988 326.686C76.282 333.801 75.8485 341.1 76.0469 348.533C76.0469 351.403 76.0469 354.751 76.5256 358.578C77.0044 366.71 83.7067 372.451 91.8452 371.972C99.9836 371.494 105.728 364.797 105.25 356.665C104.892 354.163 104.802 352.196 104.779 350.363C133.361 370.298 168.091 382 205.5 382C243.357 382 278.471 370.016 307.247 349.643C307.207 350.468 307.131 351.336 307.053 352.232C306.928 353.664 306.797 355.164 306.797 356.665C306.318 364.318 312.063 371.494 320.202 371.972H321.159C323.791 371.972 326.253 371.294 328.371 370.094C294.07 395.773 251.521 411 205.5 411ZM307.247 349.643C317.103 342.665 326.215 334.703 334.44 325.901C324.506 262.367 269.17 214.712 203.39 216.027C138.589 217.313 86.0983 265.111 77.2988 326.686C85.6155 335.48 94.8243 343.421 104.779 350.363C104.771 349.743 104.771 349.138 104.771 348.533V344.227C105.728 288.259 152.166 243.771 208.178 245.207C264.19 246.163 308.712 292.564 307.276 348.533C307.276 348.892 307.265 349.263 307.247 349.643ZM328.371 370.094C329.401 369.324 330.423 368.543 331.438 367.754C330.531 368.667 329.5 369.455 328.371 370.094ZM147 142.5C147 174.339 172.661 200 204.5 200C236.339 200 262 174.339 262 142.5C262 110.661 236.339 85 204.5 85C172.661 85 147 110.661 147 142.5ZM205.5 114C189.057 114 176 127.057 176 143.5C176 159.943 189.057 173 205.5 173C221.943 173 235 159.943 235 143.5C235 127.057 221.943 114 205.5 114Z"
						
							/>
						</svg>
						</div>
						
						<form onSubmit={handleSubmit(handleSubmitForm)}>
							<div className="form-container__content-title-subtitle">
								<h1 className="title">New user?</h1>
								<p className="subtitle">
									Use the form below to create your account.
								</p>
							</div>
							<div className="form-container__content-input">
								<div className="content-input">
									<div className="form-container__content-input-text col-one">
										<label className="label-input-text">First Name</label>
										<input
											type="text"
											placeholder="Alice"
											{...register("FirstName", {
												required: true,
												minLength: 3,
											})}
											style={
												errors.FirstName
													? { color: "red" }
													: { color: "#111111" }
											}
										/>
										<span className="highlight"></span>
										{errors.FirstName ? (
											<span className="errorBar"></span>
										) : (
											<span className="bar"></span>
										)}
									</div>

									<div className="form-container__content-input-text col-two">
										<label className="label-input-text">Last Name</label>
										<input
											type="text"
											placeholder="Miller"
											{...register("LastName", {
												required: true,
												minLength: 3,
											})}
											style={
												errors.FirstName
													? { color: "red" }
													: { color: "#111111" }
											}
										/>
										<span className="highlight"></span>
										{errors.LastName ? (
											<span className="errorBar"></span>
										) : (
											<span className="bar"></span>
										)}
									</div>
								</div>
								<div className="content-input">
									<div className="form-container__content-input-text col-one">
										<label className="label-input-text">Nationality</label>
										<select
											className="select-nationality"
											{...register("Nationality", { required: true })}
										>
											{nationality.map((item) => (
												<option key={item} value={item}>
													{item}
												</option>
											))}
										</select>
									</div>

									<div className="form-container__content-input-text col-two">
										<label className="label-input-text">Email</label>
										<input
											type="text"
											placeholder="alice.miller@yahoo.com"
											{...register("Email", {
												required: true,
												pattern: /^\S+@\S+\.\S+\S$/i,
											})}
											style={
												errors.Email ? { color: "red" } : { color: "#111111" }
											}
										/>
										<span className="highlight"></span>
										{errors.Email ? (
											<span className="errorBar"></span>
										) : (
											<span className="bar"></span>
										)}
									</div>
								</div>
								<div className="content-input">
									<div className="form-container__content-input-text form-label-block col-one">
										<label className="label-input-text label-block">
											Date of Birth:
										</label>
										<div className="select-wrap">
											<select
												className="select-birth select-day"
												required
												{...register("DayOfBirth")}
											>
												{date.days.map((day) => (
													<option key={day} value={day}>
														{day}
													</option>
												))}
											</select>

											<select
												className="select-birth"
												required
												{...register("MonthOfBirth")}
											>
												{date.months.map((month) => (
													<option key={month}>{month}</option>
												))}
											</select>

											<select
												className="select-birth select-year"
												required
												{...register("YearOfBirth")}
											>
												{date.years.map((year) => (
													<option key={year}>{year}</option>
												))}
											</select>
										</div>
									</div>

									<div className="form-container__content-input-radio col-two">
										<label>Gender</label>
										<div className="radio-container">
											<div className="radio radio-col-one">
												<label className="radio-label">
													<input
														type="radio"
														value="Male"
														{...register("Gender")}
													/>
													<i className="helper"></i>Male
												</label>
											</div>
											<div className="radio">
												<label className="radio-label">
													<input
														type="radio"
														defaultChecked={true}
														value="Female"
														{...register("Gender")}
													/>
													<i className="helper"></i>Female
												</label>
											</div>
										</div>
									</div>
								</div>

								<div className="content-input">
									<div className="form-container__content-input-text col-one">
										<label className="label-input-text">Password</label>
										<input
											type="password"
											{...register("Password", {
												required: true,
												minLength: {
													value: 8,
													message: "Password must have at least 8 characters",
												},
												pattern: {
													value:
														/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
													message:
														"Password must have one lowercase letter, one uppercase letter, one number",
												},
											})}
											style={
												errors.Password
													? { color: "red" }
													: { color: "#111111" }
											}
										/>
										<span className="highlight"></span>
										{errors.Password ? (
											<>
												<span className="errorBar"></span>
												<span style={{ color: "red" }}>
													{errors.Password.message}
												</span>
											</>
										) : (
											<span className="bar"></span>
										)}
									</div>

									<div className="form-container__content-input-text col-two">
										<label className="label-input-text">Confirm Password</label>
										<input
											type="password"
											{...register("ConfirmPassword", {
												required: true,
												validate: (value) =>
													value === password.current ||
													"The passwords do not match",
											})}
											style={
												errors.ConfirmPassword
													? { color: "red" }
													: { color: "#111111" }
											}
										/>
										<span className="highlight"></span>

										{errors.ConfirmPassword ? (
											<>
												<span className="errorBar"></span>
												<span style={{ color: "red" }}>
													{errors.ConfirmPassword.message}
												</span>
											</>
										) : (
											<span className="bar"></span>
										)}
									</div>
								</div>
							</div>
							<div className="form-container__content-submit">
								<div className="form-container__content-login">
									<p>
										Have an account? <span>Login</span>
									</p>
								</div>
								<div className="form-container__content-submit-btn">
									<button
										type="submit"
										className={shake ? `shake` : ""}
										onClick={animate}
									>
										Complete Signup
									</button>
								</div>
							</div>
						</form>
					</section>
				)}
			</div>
		</main>
	);
}

export default App;
