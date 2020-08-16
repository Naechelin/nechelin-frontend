import React, {Component} from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import HomeComponent from "./HomeComponent";

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<ul>
					<Link to="/App/QRcodeScanner?storeNum=1">
						<li>
							<HomeComponent />
						</li>
					</Link>
					<Link to="/App/QRcodeScanner?storeNum=2">
						<li>
							<li>
								<HomeComponent />
							</li>
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
