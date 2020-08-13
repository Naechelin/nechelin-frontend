import React, {PureComponent} from "react";
import "./OwnerAppMiddle.css";
import {Switch, Route} from "react-router-dom";
import Home from "../../Owner/Home/Home";
import Chart from "../../Owner/Chart/Chart";
import MyStore from "../../Owner/MyStore/MyStore";
import QRcodeScanner from "../../Owner/QRcodeScanner/QRcodeScanner";
import StampByPhoneNumber from "../../Owner/StampByPhoneNumber/StampByPhoneNumber";
class OwnerAppMiddle extends PureComponent {
	render() {
		return (
			<div className="OwnerAppMiddle">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/Home">
						<Home />
					</Route>
					<Route path="/Chart">
						<Chart />
					</Route>
					<Route path="/MyStore">
						<MyStore />
					</Route>
					<Route path="/QRcodeScanner">
						<QRcodeScanner />
					</Route>
					<Route path="/StampByPhoneNumber">
						<StampByPhoneNumber />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default OwnerAppMiddle;
