import React, {PureComponent} from "react";
import CouponAvailable from "../CouponAvailable/CouponAvailable";
import CouponHistory from "../CouponHistory/CouponHistory";
import {Switch, Route} from "react-router-dom";

class CouponShow extends PureComponent {
	render() {
		return (
			<div className="CouponShow">
				<Switch>
					<Route exact path="/Coupon">
						<CouponAvailable />
					</Route>
					<Route path="/Coupon/CouponAvailable">
						<CouponAvailable />
					</Route>
					<Route path="/Coupon/CouponHistory">
						<CouponHistory />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default CouponShow;
