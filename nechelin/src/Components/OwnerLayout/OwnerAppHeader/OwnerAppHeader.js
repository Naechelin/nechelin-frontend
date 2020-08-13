import React, {PureComponent} from "react";
import "./OwnerAppHeader.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class OwnerAppHeader extends PureComponent {
	openMenu() {
		alert("메뉴바");
	}
	openAlarm() {
		alert("알림 설정");
	}
	render() {
		return (
			<div className="OwnerAppHeader">
				<FontAwesomeIcon
					icon={faBars}
					id="faBars"
					size="2x"
					color="#FF9AA2"
					onClick={this.openMenu}
				/>
				<Link to="/Line">
					<img
						src="/images/Logo.png"
						alt="Logo"
						id="logo"
						width="15%"
					></img>
				</Link>

				<FontAwesomeIcon
					icon={faBell}
					id="faBell"
					size="2x"
					color="yellow"
					onClick={this.openAlarm}
				/>
			</div>
		);
	}
}

export default OwnerAppHeader;
