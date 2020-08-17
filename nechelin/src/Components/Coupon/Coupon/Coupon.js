import React, {PureComponent} from "react";
import "./Coupon.css";
import {Link} from "react-router-dom";
import CouponShow from "../CouponShow/CouponShow";

class Coupon extends PureComponent {
	render() {
		return (
			<div className="Coupon">
				<Link to="/App/Coupon/CouponAvailable">
					<span className="CouponTab">사용 가능한 쿠폰</span>
				</Link>
				<Link to="/App/Coupon/CouponHistory">
					<span className="CouponTab">사용 내역</span>
				</Link>
				<br />
				<div className="CouponShow">
					<CouponShow />
				</div>
			</div>
		);
	}
}

export default Coupon;
