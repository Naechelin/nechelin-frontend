import React, {PureComponent} from "react";
import "./Line.css";
import SearchBar from "../../Common/SearchBar/SearchBar";
import {Link} from "react-router-dom";
import LineShow from "../LineShow/LineShow";

class Line extends PureComponent {
	render() {
		return (
			<div className="Line">
				<SearchBar />
				<br />
				<br />
				<div className="LineQuest"></div>
				<br />
				<div className="LineCurrent">
					나의 달성 현황 : 2회
					<br />
					다음 행선지 : 가게명
					<br />
				</div>
				<br />
				<Link to="/Line/LineVisit">
					<span className="LinkTab">이번주 방문한 매장</span>
				</Link>
				<Link to="/Line/LineHistory">
					<span className="LinkTab">라인내역</span>
				</Link>
				<hr />
				<br />
				<div className="LineShow">
					<LineShow />
				</div>
			</div>
		);
	}
}

export default Line;
