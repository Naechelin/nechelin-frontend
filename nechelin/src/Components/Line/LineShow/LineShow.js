import React, {PureComponent} from "react";
import "./LineShow.css";
import LineVisit from "../LineVisit/LineVisit";
import LineHistory from "../LineHistory/LineHistory";
import {Switch, Route} from "react-router-dom";

class LineShow extends PureComponent {
	render() {
		return (
			<div className="LineShow">
				<Switch>
					<Route exact path="/">
						<LineVisit />
					</Route>
					<Route exact path="/Line">
						<LineVisit />
					</Route>
					<Route path="/Line/LineVisit">
						<LineVisit />
					</Route>
					<Route path="/Line/LineHistory">
						<LineHistory />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default LineShow;
