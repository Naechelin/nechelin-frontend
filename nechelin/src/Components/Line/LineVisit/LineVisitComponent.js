import React, {Component} from "react";
import "./LineVisitComponent.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
class LineVisitComponent extends Component {
	render() {
		return (
			<div className="LineVisitComponent">
				<Link to="/App/Store?매장명">
					<img src="/images/background.png" alt="사진" />
					<label id="storeInfo">
						왕돈까스 중식
						<br />
						<FontAwesomeIcon icon={faStar} color="#FFFFF6" />
						<FontAwesomeIcon icon={faStar} color="#FFFFF6" />
						<FontAwesomeIcon icon={faStar} color="#FFFFF6" />
						<FontAwesomeIcon icon={faStar} color="#FFFFF6" />
						<br />
						<br />
					</label>
					<label id="goToReview">.....리뷰 쓰러가기</label>
				</Link>
			</div>
		);
	}
}

export default LineVisitComponent;
