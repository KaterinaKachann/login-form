import React from "react";
import "./radioInput.scss";

function radioInputGender() {
	return (
		<div className="form-container__content-input-radio">
			<label>Gender</label>
			<div className="radio-container">
				<div className="radio">
					<label className="radio-label">
						<input type="radio" name="radio" checked/>
						<i className="helper"></i>Male
					</label>
				</div>
				<div className="radio">
					<label className="radio-label">
						<input type="radio" name="radio" />
						<i className="helper"></i>Female
					</label>
				</div>
			</div>
		</div>
	);
}

export default radioInputGender;
