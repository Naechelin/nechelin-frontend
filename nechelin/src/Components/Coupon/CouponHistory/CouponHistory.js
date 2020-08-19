import React, {PureComponent} from "react";
import "./CouponHistory.css";
import CouponComponent from "../CouponComponent/CouponComponent";

class CouponHistory extends PureComponent {
	render() {
		return (
			<div className="CouponHistory">
				<li>
					<CouponComponent />
				</li>
				);
			</div>
		);
	}
}

export default CouponHistory;
