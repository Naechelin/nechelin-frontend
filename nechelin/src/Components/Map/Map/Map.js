import React, {PureComponent} from "react";
import "./Map.css";
import SearchBar from "../../Common/SearchBar/SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faBook} from "@fortawesome/free-solid-svg-icons";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
const {kakao}=window;
class Map extends PureComponent {
	componentDidMount() {
		window.$(document).ready(function () {
			kakao.maps.load(()=>{
				let container = document.getElementById("map");
				let options = {
					center: new kakao.maps.LatLng(33.450701, 126.570667),
				};
				window.map = new kakao.maps.Map(container, options);

				function setMapType(maptype) {
					var roadmapControl = document.getElementById('btnRoadmap');
					var skyviewControl = document.getElementById('btnSkyview');
					if (maptype === 'roadmap') {
						window.map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
						roadmapControl.className = 'selected_btn';
						skyviewControl.className = 'btn';
					} else {
						window.map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
						skyviewControl.className = 'selected_btn';
						roadmapControl.className = 'btn';
					}
				}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
				function zoomIn() {
					window.map.setLevel(window.map.getLevel() - 1);
				}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
				function zoomOut() {
					window.map.setLevel(window.map.getLevel() + 1);
				}

			});



		});


	}
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
				<div id="map"></div>
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