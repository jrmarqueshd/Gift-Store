import React from "react";

import { DefaultStyle } from "./styles/GlobalStyles";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import Routes from "./routes";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
	return (
		<>
			<Router>
				<DefaultStyle />
				<Header />
				<Switch>
					<Routes />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
