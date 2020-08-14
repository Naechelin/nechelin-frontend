import React, {Component} from "react";
import "./AppIntro.css";
import Home from "./Components/Owner/Home/Home";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import App from "./App";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class AppIntro extends Component {
	componentDidMount() {
		window.$(document).ready(function () {
			window.$(".book").click(function () {
				window.location.assign("/App");
			});
		});
	}

	render() {
		return (
			<div className="Intro">
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
						<li> </li>
						<li></li>
						<li></li>
					</ul>
					<ul className="page">
						<li></li>
						<li>
							<label id="content">나의 맛집내슐랭</label>
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
			</div>
		);
	}
}

export default AppIntro;
