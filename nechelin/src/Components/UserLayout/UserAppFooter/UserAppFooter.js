import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import "./UserAppFooter.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faGift,
	faFlag,
	faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class UserAppFooter extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			num: 1,
			choose: 1,
		};
	}
	changeMenu(choose) {}
	render() {
		return (
			<div className="UserAppFooter">
				<Link to="/App/Line">
					<button>
						<FontAwesomeIcon
							icon={faFlag}
							size="2x"
							color="white"
							onClick={this.changeMenu(1)}
						/>
						<br />
						라인
					</button>
				</Link>

				<Link to="/App/Map">
					<button>
						<FontAwesomeIcon
							icon={faMapMarkedAlt}
							size="2x"
							color="skyblue"
						/>
						<br />
						맛있을 지도
					</button>
				</Link>
				<Link to="/App/Coupon">
					<button>
						<FontAwesomeIcon
							icon={faGift}
							size="2x"
							color="white"
						/>
						<br />
						내쿠폰함
					</button>
				</Link>
			</div>
		);
	}
}
UserAppFooter.protoTypes = {
	num: PropTypes.number,
	choose: PropTypes.number,
};
export default UserAppFooter;
