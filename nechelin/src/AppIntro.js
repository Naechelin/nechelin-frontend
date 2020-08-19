import React, {PureComponent} from "react";
import "./AppIntro.css";
import {Link} from "react-router-dom";

class AppIntro extends PureComponent {
	render() {
		return (
			<div className="Intro">
				<Link to="/App">
					<figure className="book">
						<ul className="hardcover_front">
							<li>
								<img
									src="/images/bookCover.png"
									alt=""
									width="100%"
									height="100%"
								/>
							</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<ul className="page">
							<li></li>
							<li>
								<img
									src="/images/frontPage.jpg"
									alt="frontPage"
								/>
							</li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<ul className="hardcover_back">
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<ul className="book_spine">
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</figure>
				</Link>
			</div>
		);
	}
}

export default AppIntro;
