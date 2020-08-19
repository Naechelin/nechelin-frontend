import React, {PureComponent} from "react";
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
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class Store extends PureComponent {
	componentDidMount() {
		window.$(document).ready(function () {
			/* 매장의 리뷰 보여주는 아작스*/
			window.$.ajax({
				url: "http://localhost:8080/review/2/list",
				type: "get",
				dataType: "jsonp",
				jsonp: "callback",
				success: function (data) {
					var list = data.list;
					for (let item in list) {
						console.log(list[item].reviewPac);
						window
							.$("<li>" + "<ReviewCard/>" + "</li>")
							.appendTo(".reviewOrder");
					}
				},
				error: function (request, status, error) {
					alert(
						"code:" +
							request.status +
							"\n" +
							"message:" +
							request.responseText +
							"\n" +
							"error:" +
							error
					);
				},
			});

			var score = 0;
			window.$("#addReview").click(function () {
				window.$(".popUpBackground").css("visibility", "visible");
				window.$(".popUp").css("visibility", "visible");
			});
			window.$(document).keydown(function (event) {
				if (event.keyCode === 27 || event.which === 27) {
					let select = window.confirm("작성을 그만두시겠습니까?");

					if (select === true) {
						document.getElementById("txtArea").value = "";
						score = 0;
						window.$(".upload-name").val("파일을 선택해주세요");
						window.$("#file").val();

						window
							.$(".reviewStars")
							.css("color", "rgb(218, 237, 253)");
						window.$("#star6").css("visibility", "hidden");
						window.$("#star7").css("visibility", "hidden");
						window.$("#star8").css("visibility", "hidden");

						window
							.$(".popUpBackground")
							.css("visibility", "hidden");
						window.$(".popUp").css("visibility", "hidden");
					}
				}
			});
			window.$("#quit").click(function () {
				let select = window.confirm("작성을 그만두시겠습니까?");
				if (select === true) {
					document.getElementById("txtArea").value = "";
					score = 0;
					window.$(".upload-name").val("파일을 선택해주세요");
					window.$("#file").val();

					window.$(".reviewStars").css("color", "rgb(218, 237, 253)");
					window.$("#star6").css("visibility", "hidden");
					window.$("#star7").css("visibility", "hidden");
					window.$("#star8").css("visibility", "hidden");

					window.$(".popUpBackground").css("visibility", "hidden");
					window.$(".popUp").css("visibility", "hidden");
				}
			});
			window.$("#cancel").click(function () {
				let select = window.confirm("작성을 그만두시겠습니까?");
				if (select === true) {
					document.getElementById("txtArea").value = "";
					score = 0;
					window.$(".upload-name").val("파일을 선택해주세요");
					window.$("#file").val();

					window.$(".reviewStars").css("color", "rgb(218, 237, 253)");
					window.$("#star6").css("visibility", "hidden");
					window.$("#star7").css("visibility", "hidden");
					window.$("#star8").css("visibility", "hidden");

					window.$(".popUpBackground").css("visibility", "hidden");
					window.$(".popUp").css("visibility", "hidden");
				}
			});
			window.$("#confirm").click(function () {
				if (score !== 0) {
					if (document.getElementById("txtArea").value.length !== 0) {
						alert("리뷰가 등록되었습니다");
						/* 아래 아작스는 리뷰 등록 아작스*/
						window.$.ajax({
							url: "http://localhost:8080/review/1",
							type: "post",
							dataType: "jsonp",
							jsonp: "callback",
							data: {
								writer: 1,
								reviewRating: score,
								reviewPac: document.getElementById("txtArea")
									.value,
								reviewPhoto: window.$("#file").val(),
							},
							success: function (data) {
								alert(data);
							},
						});
						document.getElementById("txtArea").value = "";
						score = 0;
						window.$(".upload-name").val("파일을 선택해주세요");
						window.$("#file").val();

						window
							.$(".reviewStars")
							.css("color", "rgb(218, 237, 253)");
						window.$("#star6").css("visibility", "hidden");
						window.$("#star7").css("visibility", "hidden");
						window.$("#star8").css("visibility", "hidden");

						window
							.$(".popUpBackground")
							.css("visibility", "hidden");
						window.$(".popUp").css("visibility", "hidden");
					} else {
						alert("내용을 입력해주세요");
					}
				} else {
					alert("평점을 입력해주세요");
				}
			});

			window.$("#star1").click(function () {
				score = 1;
				window.$(".reviewStars").css("color", "rgb(218, 237, 253)");
				window.$("#star1").css("color", "#ffff66");

				window.$("#star6").css("visibility", "hidden");
				window.$("#star7").css("visibility", "hidden");
				window.$("#star8").css("visibility", "hidden");
			});
			window.$("#star2").click(function () {
				score = 2;
				window.$(".reviewStars").css("color", "rgb(218, 237, 253)");
				window.$("#star1").css("color", "#ffff66");
				window.$("#star2").css("color", "#ffff66");

				window.$("#star6").css("visibility", "hidden");
				window.$("#star7").css("visibility", "hidden");
				window.$("#star8").css("visibility", "hidden");
			});
			window.$("#star3").click(function () {
				score = 3;
				window.$(".reviewStars").css("color", "rgb(218, 237, 253)");
				window.$("#star1").css("color", "#ffff66");
				window.$("#star2").css("color", "#ffff66");
				window.$("#star3").css("color", "#ffff66");

				window.$("#star6").css("visibility", "hidden");
				window.$("#star7").css("visibility", "hidden");
				window.$("#star8").css("visibility", "hidden");
			});
			window.$("#star4").click(function () {
				score = 4;
				window.$(".reviewStars").css("color", "rgb(218, 237, 253)");
				window.$("#star1").css("color", "#ffff66");
				window.$("#star2").css("color", "#ffff66");
				window.$("#star3").css("color", "#ffff66");
				window.$("#star4").css("color", "#ffff66");

				window.$("#star6").css("visibility", "hidden");
				window.$("#star7").css("visibility", "hidden");
				window.$("#star8").css("visibility", "hidden");
			});
			window.$("#star5").click(function () {
				score = 5;
				window.$(".reviewStars").css("color", "rgb(218, 237, 253)");
				window.$("#star1").css("color", "#ffff66");
				window.$("#star2").css("color", "#ffff66");
				window.$("#star3").css("color", "#ffff66");
				window.$("#star4").css("color", "#ffff66");
				window.$("#star5").css("color", "#ffff66");

				window.$("#star6").css("visibility", "visible");
				window.$("#star7").css("visibility", "visible");
				window.$("#star8").css("visibility", "visible");
			});
			window.$("#star6").click(function () {
				score = 6;
				window.$("#star6").css("color", "rgb(218, 237, 253)");
				window.$("#star7").css("color", "rgb(218, 237, 253)");
				window.$("#star8").css("color", "rgb(218, 237, 253)");

				window.$("#star6").css("color", "red");
			});
			window.$("#star7").click(function () {
				score = 7;
				window.$("#star6").css("color", "rgb(218, 237, 253)");
				window.$("#star7").css("color", "rgb(218, 237, 253)");
				window.$("#star8").css("color", "rgb(218, 237, 253)");

				window.$("#star6").css("color", "red");
				window.$("#star7").css("color", "red");
			});
			window.$("#star8").click(function () {
				score = 8;
				window.$("#star6").css("color", "rgb(218, 237, 253)");
				window.$("#star7").css("color", "rgb(218, 237, 253)");
				window.$("#star8").css("color", "rgb(218, 237, 253)");

				window.$("#star6").css("color", "red");
				window.$("#star7").css("color", "red");
				window.$("#star8").css("color", "red");
			});

			window.$("#fileInput").on("change", function () {
				var fileName = window.$("#file").val();
				window.$(".upload-name").val(fileName);
			});
			var fileTarget = window.$("#file");
			fileTarget.on("change", function () {
				// 값이 변경되면
				var cur = window.$(".filebox input[type='file']").val();
				window.$(".upload-name").val(cur);
			});
		});
	}
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
						<label id="foodStyle">중식</label>
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
						<button id="addReview">리뷰 쓰기</button>
					</div>
					<div className="popUpBackground" />
					<div className="popUp">
						<label id="reviewTitle">리뷰쓰기</label>
						<label id="quit"> X </label>
						<hr />
						<img
							src="/images/restaurant1.png"
							alt="restaurant1.png"
							id="reviewImage"
						/>
						<div id="reviewStoreInfo">
							<h4>상호명</h4>
							<br />
							<label>마라탕1 짜장면2 짬뽕1</label>
						</div>
						<hr />
						<label>
							<label id="reviewStarsLabel">평점:</label>
							<FontAwesomeIcon
								icon={faStar}
								color="rgb(218, 237, 253)"
								className="reviewStars"
								id="star1"
							/>
							<FontAwesomeIcon
								icon={faStar}
								color="rgb(218, 237, 253)"
								className="reviewStars"
								id="star2"
							/>
							<FontAwesomeIcon
								icon={faStar}
								color="rgb(218, 237, 253)"
								className="reviewStars"
								id="star3"
							/>
							<FontAwesomeIcon
								icon={faStar}
								color="rgb(218, 237, 253)"
								className="reviewStars"
								id="star4"
							/>
							<FontAwesomeIcon
								icon={faStar}
								color="rgb(218, 237, 253)"
								className="reviewStars"
								id="star5"
							/>
							<FontAwesomeIcon
								icon={faStar}
								color="red"
								className="reviewStars"
								visibility="hidden"
								id="star6"
							/>
							<FontAwesomeIcon
								icon={faStar}
								color="red"
								className="reviewStars"
								visibility="hidden"
								id="star7"
							/>
							<FontAwesomeIcon
								icon={faStar}
								color="red"
								className="reviewStars"
								visibility="hidden"
								id="star8"
							/>
						</label>
						<hr />
						<br />
						<div id="writeArea">
							<label id="writePlease">장단점을 적어주세요!</label>
							<br />
							<textarea
								id="txtArea"
								required
								placeholder="리뷰 내용을 입력해주세요"
								autoFocus
							></textarea>
						</div>
						<hr />
						<div className="filebox">
							<label>+</label>
							<input type="file" id="file" />

							<input
								className="upload-name"
								value="파일을 선택해주세요"
								readOnly
							/>
						</div>
						<hr />
						<button id="cancel">취소</button>
						<button type="submit" id="confirm">
							등록
						</button>
					</div>
					<ol className="reviewOrder">
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
					/>
				</a>
			</div>
		);
	}
}

export default Store;
