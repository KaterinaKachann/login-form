import React, { useRef } from "react";
import { useForm } from "react-hook-form";
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

	const handleSubmitForm = (data: any) => {
		console.log(data);
		reset();
	};
	return (
		<main className="container">
			<div className="form-conatiner">
				<header className="form-container__title">
					<h1 className="form-container__title-main">Sign up</h1>
				</header>
				<section className="form-container__content">
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
										{...register("FirstName", { required: true, minLength: 3 })}
										style={
											errors.FirstName ? { color: "red" } : { color: "#111111" }
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
										{...register("LastName", { required: true, minLength: 3 })}
										style={
											errors.FirstName ? { color: "red" } : { color: "#111111" }
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
										type="text"
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
											errors.Password ? { color: "red" } : { color: "#111111" }
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
										type="text"
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
								<button type="submit">Complete Signup</button>
							</div>
						</div>
					</form>
				</section>
			</div>
		</main>
	);
}

export default App;
