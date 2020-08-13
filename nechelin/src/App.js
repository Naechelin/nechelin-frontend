import React from "react";
import UserAppHeader from "./Components/UserLayout/UserAppHeader/UserAppHeader";
import UserAppMiddle from "./Components/UserLayout/UserAppMiddle/UserAppMiddle";
import UserAppFooter from "./Components/UserLayout/UserAppFooter/UserAppFooter";

import OwnerAppHeader from "./Components/OwnerLayout/OwnerAppHeader/OwnerAppHeader";
import OwnerAppMiddle from "./Components/OwnerLayout/OwnerAppMiddle/OwnerAppMiddle";
import OwnerAppFooter from "./Components/OwnerLayout/OwnerAppFooter/OwnerAppFooter";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
	let member_type = "owner";
	if (member_type === "customer")
		return (
			<div className="App">
				<Router>
					<header className="header">
						<UserAppHeader />
					</header>
					<div className="middle">
						<UserAppMiddle />
					</div>
					<footer className="footer">
						<UserAppFooter />
					</footer>
				</Router>
			</div>
		);
	if (member_type === "owner")
		return (
			<div className="App">
				<Router>
					<header className="header">
						<OwnerAppHeader />
					</header>
					<div className="middle">
						<OwnerAppMiddle />
					</div>
					<footer className="footer">
						<OwnerAppFooter />
					</footer>
				</Router>
			</div>
		);
}
export default App;
