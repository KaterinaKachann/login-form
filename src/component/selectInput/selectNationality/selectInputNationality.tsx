import React from "react";
import "./selectInputNationality.scss";

function selectInputNationality() {
	return (
		<div className="form-container__content-input-text">
			<label className="label-input-text">Nationality</label>
			<select className="select-nationality">
				<option selected>American</option>
				<option>Belarusian</option>
				<option>Russian</option>
				<option>Pole</option>
				<option>German</option>
			</select>
		</div>
	);
}

export default selectInputNationality;
