import React from "react";

import { Route } from "react-router-dom";
import Home from "./Pages/Home/index";

function Routes() {
	return (
		<>
			<Route exact path="/">
				<Home />
			</Route>
		</>
	);
}

export default Routes;
