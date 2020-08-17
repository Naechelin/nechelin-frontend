import React, {PureComponent} from "react";
import "./CouponAvailable.css";
import CouponComponent from "../CouponComponent/CouponComponent";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class CouponAvailable extends PureComponent {
	componentDidMount() {
		window.$(document).ready(function () {
			window.$(".CouponComponent").click(function () {});
		});
	}
	render() {
		return (
			<div className="CouponAvailable">
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

export default CouponAvailable;
