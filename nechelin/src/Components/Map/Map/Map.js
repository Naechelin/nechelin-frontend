import React, {PureComponent} from "react";
import "./Map.css";
import SearchBar from "../../Common/SearchBar/SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faBook} from "@fortawesome/free-solid-svg-icons";

class Map extends PureComponent {
	render() {
		return (
			<div className="Map">
				<select>
					<option>내위치</option>
					<option>동작구</option>
				</select>
				<SearchBar />
				<button id="navigatorBtn">
					<img
						id="navigator"
						src="/images/navigator.png"
						alt="길찾기"
					></img>
				</button>
				<div>map</div>
				<div className="filter">
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="red" />
					<FontAwesomeIcon icon={faBook} color="rgb(100, 236, 159)" />
				</div>
			</div>
		);
	}
}

export default Map;
