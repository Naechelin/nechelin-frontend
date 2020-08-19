import React, {PureComponent} from "react";
import "./Login.css";
import {Link} from "react-router-dom";

class Login extends PureComponent {
	render() {
		return (
			<div className="Login">
				<div className="idDiv">
					<label for="id" id="idLabel">
						id:
					</label>
					<input type="text" id="id" />
				</div>
				<br />
				<div className="pwdDiv">
					<label for="pwd">password : </label>
					<input type="password" id="pwd" />
				</div>
				<br />
				<label for="checkbox">자동로그인 </label>
				<input type="checkbox" id="checkbox" />
				<br />
				<Link to="/App">
					<button type="submit" id="confirm">
						확인
					</button>
				</Link>
			</div>
		);
	}
}

export default Login;
