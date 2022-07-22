import React from "react";
import './selectInputDate.scss'

function selectInputDate() {
	return (
		<div className="form-container__content-input-text">
			<select className="select-birth">
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
				<option>11</option>
				<option>12</option>
				<option>13</option>
				<option>14</option>
				<option>15</option>
				<option>16</option>
				<option>17</option>
				<option>18</option>
				<option>19</option>
				<option>20</option>
				<option>21</option>
				<option>22</option>
				<option>23</option>
				<option>24</option>
				<option>25</option>
				<option>26</option>
				<option>27</option>
				<option>28</option>
				<option>29</option>
				<option>30</option>
				<option>31</option>
			</select>
			<select className="select-birth">
				<option>January</option>
				<option>February</option>
				<option>March</option>
				<option>April</option>
				<option>May</option>
				<option>June</option>
				<option>July</option>
				<option>August</option>
				<option>September</option>
				<option>October</option>
				<option>November</option>
				<option>December</option>
			</select>
			<select className="select-birth">
				<option>1970</option>
				<option>1971</option>
				<option>1972</option>
				<option>1973</option>
				<option>1974</option>
				<option>1975</option>
			</select>
			<span className="highlight"></span>
			<span className="bar"></span>
			<label className="label-input-text">Date of Birthday:</label>
		</div>
	);
}

export default selectInputDate;
