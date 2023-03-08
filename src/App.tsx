import React from "react";

import { DefaultStyle } from "./styles/GlobalStyles";

import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./Pages/Home";

function App() {
	return (
		<>
			<Router>
				<DefaultStyle />
				<Header />
				<Switch>
					<Route path="/" element={<Home />} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
