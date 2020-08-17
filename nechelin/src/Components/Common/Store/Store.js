import React, {Component} from "react";
import "./Store.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faUtensils,
	faStar,
	faPhoneAlt,
	faStore,
	faMapMarkerAlt,
	faCalendarCheck,
	faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "../ReviewCard/ReviewCard";

class Store extends Component {
	render() {
		return (
			<div className="Store">
				<div className="store">
					<img
						id="backgroundPhoto"
						src="/images/restaurant1.png"
						alt="배경사진"
					></img>
					<div className="StoreInfo">
						<div className="StoreScore">
							<FontAwesomeIcon icon={faStar} color="yellow" />
							<FontAwesomeIcon icon={faStar} color="yellow" />
							<FontAwesomeIcon icon={faStar} color="yellow" />
							<FontAwesomeIcon icon={faStar} color="yellow" />
							<FontAwesomeIcon icon={faStar} color="yellow" />
							<FontAwesomeIcon icon={faStar} color="red" />
							<FontAwesomeIcon icon={faStar} color="red" />
							<FontAwesomeIcon icon={faStar} color="red" /> 8.0
						</div>
						<br />
						<h2>
							<FontAwesomeIcon
								icon={faUtensils}
								color="silver"
								id="silver"
							/>
						</h2>
						<h2 id="storeName">매장명</h2>
						<text id="foodStyle">중식</text>
						<br />
						<ul>
							<li>
								<FontAwesomeIcon
									icon={faStore}
									color="rgb(100, 100, 100)"
									className="icon"
								/>
								매장소개 : 와이파이 있음
							</li>
							<br />
							<li>
								<FontAwesomeIcon
									icon={faPhoneAlt}
									color="rgb(100, 100, 100)"
									className="icon"
								/>
								전화번호 : 010-1010-1010
							</li>
							<li>
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									color="rgb(100, 100, 100)"
									className="icon"
								/>
								주소 : 서울시 동작구 상도 1동 상도로 10 건물
							</li>
							<li>
								<FontAwesomeIcon
									icon={faCalendarCheck}
									color="rgb(100, 100, 100)"
									className="icon"
								/>
								영업일 : 일요일 휴무
							</li>
						</ul>
					</div>
					<div className="text">
						최근 리뷰 n개
						<button onClick="">리뷰 쓰기</button>
					</div>

					<ol>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
						<li>
							<ReviewCard />
						</li>
					</ol>
				</div>
				<a href="#backgroundPhoto">
					<FontAwesomeIcon
						icon={faArrowUp}
						color="rgba(120, 102, 120, 0.5)"
						id="arrowUp"
						size="2xl"
					/>
				</a>
			</div>
		);
	}
}

export default Store;
