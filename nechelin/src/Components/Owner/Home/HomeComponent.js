import React, {Component} from "react";
import "./HomeComponent.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

class HomeComponent extends Component {
	render() {
		return (
			<div className="HomeComponent">
				<img src="/images/dummyLine2.png" alt="사진" />
				<label id="HomeInfo">
					매장명 <text id="foodStyle">중식</text>
					<br />
					<FontAwesomeIcon icon={faStar} color="#FFFFF6" />
					<FontAwesomeIcon icon={faStar} color="#FFFFF6" />
					<FontAwesomeIcon icon={faStar} color="#FFFFF6" />
					<FontAwesomeIcon icon={faStar} color="#FFFFF6" />
					<br />
					<br />
				</label>
				<label className="HomeToScanner">QR코드 스캐너</label>
				<br />
				<img
					src="/images/QRcodeScanner.png"
					alt="QRcodeScanner"
					id="QRcodeScanner"
				/>
				<br />
				<label className="HomeToScanner"></label>
			</div>
		);
	}
}

export default HomeComponent;
