import React, {PureComponent} from "react";
import "./CouponComponent.css";

class CouponComponent extends PureComponent {
	render() {
		return (
			<div className="CouponComponent">
				<div className="CouponComponent Store">
					<h1>내슐랭 통합쿠폰</h1>
					<ol>
						<li>A매장 5%</li>
						<li>A매장 5%</li>
						<li>A매장 5%</li>
					</ol>
				</div>
				<div className="CouponComponentImage">
					<h6> QR코드 이미지</h6>
					<h6>내슐랭아이콘</h6>
				</div>
			</div>
		);
	}
}

export default CouponComponent;
