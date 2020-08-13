import React from "react";
import UserAppHeader from "./Components/UserLayout/UserAppHeader/UserAppHeader";
import UserAppMiddle from "./Components/UserLayout/UserAppMiddle/UserAppMiddle";
import UserAppFooter from "./Components/UserLayout/UserAppFooter/UserAppFooter";
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
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
}
export default App;
