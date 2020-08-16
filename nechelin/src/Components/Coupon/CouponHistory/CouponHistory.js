import React, {PureComponent} from "react";
import "./CouponHistory.css";
import CouponComponent from "../CouponComponent/CouponComponent";
class CouponHistory extends PureComponent {
	render() {
		return (
			<div className="CouponHistory">
				<ol>
					<li>
						<CouponComponent />
					</li>
					<li>
						<CouponComponent />
					</li>
					<li>
						<CouponComponent />
					</li>
					<li>
						<CouponComponent />
					</li>
					<li>
						<CouponComponent />
					</li>
					<li>
						<CouponComponent />
					</li>
					<li>
						<CouponComponent />
					</li>
					<li>
						<CouponComponent />
					</li>
				</ol>
			</div>
		);
	}
}

export default CouponHistory;
