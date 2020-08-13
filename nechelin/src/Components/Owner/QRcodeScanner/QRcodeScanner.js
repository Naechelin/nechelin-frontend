import React, {Component} from "react";
import "./QRcodeScanner.css";
import {Link} from "react-router-dom";
class QRcodeScanner extends Component {
	render() {
		return (
			<div className="QRcodeScanner">
				<label>[ + ]</label>
				<br />
				<Link to="/StampByPhoneNumber">
					<button>번호로 적립하기</button>
				</Link>
			</div>
		);
	}
}

export default QRcodeScanner;
