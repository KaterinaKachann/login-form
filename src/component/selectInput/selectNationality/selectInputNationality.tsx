import React from "react";
import './selectInputNationality.scss'

function selectInputNationality() {
	return (
		<div className="form-container__content-input-text">
			<select className="select-nationality">
				<option>American</option>
				<option>Belarusian</option>
				<option>Russian</option>
				<option>Pole</option>
				<option>German</option>
			</select>
			<span className="highlight"></span>
			<span className="bar"></span>
			<label className="label-input-text">Nationality</label>
		</div>
	);
}

export default selectInputNationality;
