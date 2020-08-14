import React, {PureComponent} from "react";
import "./UserAppHeader.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBookmark, faBell} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class UserAppHeader extends PureComponent {
	openMenu() {
		alert("메뉴바");
	}
	openAlarm() {
		alert("알림 설정");
	}
	render() {
		return (
			<div className="UserAppHeader">
				<FontAwesomeIcon
					icon={faBars}
					id="faBars"
					size="2x"
					color="#FF9AA2"
					onClick={this.openMenu}
				/>
				<Link to="/App/Line">
					<img
						src="/images/Logo.png"
						alt="Logo"
						id="logo"
						width="15%"
					></img>
				</Link>

				<FontAwesomeIcon
					id="bookMark"
					icon={faBookmark}
					size="2x"
					color="brown"
				/>
				<img src="/images/bell.png" alt="bell" id="bell" />
			</div>
		);
	}
}

export default UserAppHeader;
