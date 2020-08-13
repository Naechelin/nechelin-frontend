import React, {Component} from "react";
import "./ReviewCard.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faStar} from "@fortawesome/free-solid-svg-icons";
class ReviewCard extends Component {
	render() {
		return (
			<div className="ReviewCard">
				<div className="ReviewCardScore">
					<FontAwesomeIcon icon={faStar} color="red" />
					<FontAwesomeIcon icon={faStar} color="red" />
					<FontAwesomeIcon icon={faStar} color="red" />
					<br />
					<label>4.8</label> <br />
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="yellow" />
					<FontAwesomeIcon icon={faStar} color="yellow" />
				</div>
				<div>
					<FontAwesomeIcon
						id="profile"
						icon={faUser}
						size="4xl"
						color="gray"
					/>
					<textarea readOnly>
						sdfsdfsdfsdfsdfsdfsdfsdfsdfadsfasdfa
					</textarea>
					<img src="images/storePhoto.png" alt="첨부사진"></img>
					<br />
				</div>
				<div>
					<label>리뷰자명</label>
				</div>
			</div>
		);
	}
}
export default ReviewCard;
