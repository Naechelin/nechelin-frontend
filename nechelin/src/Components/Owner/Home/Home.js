import React, {Component} from "react";
import "./Home.css";
import {Link} from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<ul>
					<Link to="/QRcodeScanner?storeNum=1">
						<li>
							<img
								src="/images/background.png"
								alt="매장사진"
							></img>
							<label>내매장1</label>
							<label>QR코드 스캐너</label>
						</li>
					</Link>
					<Link to="/QRcodeScanner?storeNum=2">
						<li>
							<img
								src="/images/background.png"
								alt="매장사진"
							></img>
							<label>내매장2</label>
							<label>QR코드 스캐너</label>
						</li>
					</Link>
					<li>
						<h1>+</h1>
					</li>
					<li>
						<h1>+</h1>
					</li>
				</ul>
			</div>
		);
	}
}

export default Home;
