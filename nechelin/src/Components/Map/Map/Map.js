import React, {PureComponent} from "react";
import "./Map.css";
import SearchBar from "../../Common/SearchBar/SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faBook} from "@fortawesome/free-solid-svg-icons";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
const {kakao} = window;
class Map extends PureComponent {
	componentDidMount() {
		window.$(document).ready(function () {
			kakao.maps.load(() => {
				let container = document.getElementById("map");
				let options = {
					center: new kakao.maps.LatLng(33.450701, 126.570667),
				};
				window.map = new kakao.maps.Map(container, options);
			});
		});
	}
	render() {
		return (
			<div className="Map">
				<div id="map"></div>
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
