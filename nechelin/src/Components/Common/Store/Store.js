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
} from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "../ReviewCard/ReviewCard";

class Store extends Component {
	render() {
		return (
			<div className="Store">
				<div className="store">
					<img
						id="backgroundPhoto"
						src="/images/background.png"
						alt="배경사진"
					></img>
					<hr />
					<div className="StoreInfo">
						<div className="StoreScore">
							<FontAwesomeIcon icon={faStar} color="red" />
							<FontAwesomeIcon icon={faStar} color="red" />
							<FontAwesomeIcon icon={faStar} color="red" />
							<br />
							5.0
							<br />
							<FontAwesomeIcon icon={faStar} color="yellow" />
							<FontAwesomeIcon icon={faStar} color="yellow" />
							<FontAwesomeIcon icon={faStar} color="yellow" />
							<FontAwesomeIcon icon={faStar} color="yellow" />
							<FontAwesomeIcon icon={faStar} color="yellow" />
						</div>
						<h2>
							<FontAwesomeIcon icon={faUtensils} color="silver" />
							매장명
						</h2>
						<label>중식</label>
						<br />
						<ul>
							<li>
								<FontAwesomeIcon
									icon={faStore}
									color="lightGreen"
								/>
								매장소개 : 와이파이 있음
							</li>
							<br />
							<li>
								<FontAwesomeIcon
									icon={faPhoneAlt}
									color="skyblue"
								/>
								전화번호 : 010-1010-1010
							</li>
							<li>
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									color="skyblue"
								/>
								주소 : 서울시 동작구 상도 1동 상도로 10 건물
							</li>
							<li>
								<FontAwesomeIcon
									icon={faCalendarCheck}
									color="skyblue"
								/>
								영업일 : 일요일 휴무
							</li>
						</ul>
					</div>
					<hr />
					<div className="text">
						최근 리뷰 n개
						<button onClick="">리뷰 쓰기</button>
					</div>
					<hr />
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
			</div>
		);
	}
}

export default Store;
