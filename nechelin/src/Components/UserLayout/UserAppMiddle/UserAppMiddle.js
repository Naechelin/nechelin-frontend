import React, {PureComponent} from "react";
import "./UserAppMiddle.css";
import {Switch, Route} from "react-router-dom";
import Line from "../../Line/Line/Line";
import Map from "../../Map/Map/Map";
import Coupon from "../../Coupon/Coupon/Coupon";
import Store from "../../Common/Store/Store";
class UserAppMiddle extends PureComponent {
	render() {
		return (
			<div className="UserAppMiddle">
				<Switch>
					<Route exact path="/">
						<Line />
					</Route>
					<Route path="/Line">
						<Line />
					</Route>
					<Route path="/Map">
						<Map />
					</Route>
					<Route path="/Coupon">
						<Coupon />
					</Route>
					<Route path="/Store">
						<Store />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default UserAppMiddle;
