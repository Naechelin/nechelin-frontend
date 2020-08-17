import React, {Component} from "react";
import "./ReviewCard.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
class ReviewCard extends Component {
	render() {
		return (
			<div className="ReviewCard">
				<img src="/images/restaurant3.png" alt="첨부사진"></img>
				<div className="ReviewCardScore">
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="red" />
					<FontAwesomeIcon icon={faStar} color="red" />
					<FontAwesomeIcon icon={faStar} color="red" /> 4.8
				</div>
				<br />
				<text id="writter">tlfzgjadyd</text>
				<br />
				<div className="profileDiv"></div>
				<div className="text">맛있었다 </div>
				<br />
			</div>
		);
	}
}
export default ReviewCard;
