import React from "react";
import "./App.scss";

import SelectInputNationality from "./component/selectInput/selectNationality/selectInputNationality";
import SelectInputDate from "./component/selectInput/selectDate/selectInputDate";
import RadioInputGender from "./component/radioInput/radioInput";

function App() {
	return (
		<main className="container">
			<div className="form-conatiner">
				<header className="form-container__title">
					<h1 className="form-container__title-main">Sign up</h1>
				</header>
				<section className="form-container__content">
					<div className="form-container__content-title-subtitle">
						<h1 className="title">New user?</h1>
						<p className="subtitle">
							Use the form below to create your account.
						</p>
					</div>
					<div className="form-container__content-input">
						<div className="content-input col-one">
							<div className="form-container__content-input-text">
								<label className="label-input-text">First Name</label>
								<input type="text" required value="Alice" />
								<span className="highlight"></span>
								<span className="bar"></span>
							</div>
							<SelectInputNationality />
							<SelectInputDate />
							<div className="form-container__content-input-text">
								<label className="label-input-text">Password</label>
								<input type="text" required />
								<span className="highlight"></span>
								<span className="bar"></span>
							</div>
						</div>
						<div className="content-input col-two">
							<div className="form-container__content-input-text">
								<label className="label-input-text">Last Name</label>
								<input type="text" required value="Miller" />
								<span className="highlight"></span>
								<span className="bar"></span>
							</div>
							<div className="form-container__content-input-text">
								<label className="label-input-text">Email</label>
								<input type="text" required value="alice.miller@yahoo.com" />
								<span className="highlight"></span>
								<span className="bar"></span>
							</div>
							<RadioInputGender />

							<div className="form-container__content-input-text">
								<label className="label-input-text">Confirm Password</label>
								<input type="text" required />
								<span className="highlight"></span>
								<span className="bar"></span>
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
							<button>Complete Signup</button>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
