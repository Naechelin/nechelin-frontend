import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import "./OwnerAppFooter.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faChartPie, faStore} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class OwnerAppFooter extends PureComponent {
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
			<div className="OwnerAppFooter">
				<Link to="/Home">
					<button>
						<FontAwesomeIcon
							icon={faHome}
							size="2x"
							color="white"
							onClick={this.changeMenu(1)}
						/>
						<br />홈
					</button>
				</Link>

				<Link to="/Chart">
					<button>
						<FontAwesomeIcon
							icon={faChartPie}
							size="2x"
							color="skyblue"
						/>
						<br />
						분석 차트
					</button>
				</Link>
				<Link to="/MyStore">
					<button>
						<FontAwesomeIcon
							icon={faStore}
							size="2x"
							color="white"
						/>
						<br />내 매장
					</button>
				</Link>
			</div>
		);
	}
}
OwnerAppFooter.protoTypes = {
	num: PropTypes.number,
	choose: PropTypes.number,
};
export default OwnerAppFooter;
