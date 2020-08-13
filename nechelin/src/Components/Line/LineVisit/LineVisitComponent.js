import React, {Component} from "react";
import "./LineVisitComponent.css";
import {Link} from "react-router-dom";
class LineVisitComponent extends Component {
	render() {
		return (
			<div className="LineVisitComponent">
				<span>
					<Link to="/Store?매장명">방문한 가게</Link>
				</span>
				<span>리뷰쓰기</span>
			</div>
		);
	}
}

export default LineVisitComponent;
