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
					<Route exact path="/App">
						<Line />
					</Route>
					<Route path="/App/Line">
						<Line />
					</Route>
					<Route path="/App/Map">
						<Map />
					</Route>
					<Route path="/App/Coupon">
						<Coupon />
					</Route>
					<Route path="/App/Store">
						<Store />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default UserAppMiddle;
