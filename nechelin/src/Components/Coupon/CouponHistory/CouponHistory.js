import React, {PureComponent} from "react";
import CouponPaper from "../CouponPaper/CouponPaper";
class CouponHistory extends PureComponent {
	render() {
		return (
			<div className="CouponHistory">
				<ol>
					<li>
						<CouponPaper />
					</li>
				</ol>
			</div>
		);
	}
}

export default CouponHistory;
