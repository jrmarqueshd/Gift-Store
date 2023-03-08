import { DefaultStyle } from "./styles/GlobalStyles";

import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import { lazy, Suspense } from "react";

const Header = lazy(() => import(/* webpackChunkName: "[request]" */"./components/Header/index"));
const Footer = lazy(() => import(/* webpackChunkName: "[request]" */"./components/Footer/index"));
const Home = lazy(() => import(/* webpackChunkName: "[request]" */"./Pages/Home"));

function App() {
	return (
		<Router>
			<DefaultStyle />
			<Suspense fallback={<div>loading</div>}>
				<Header />
			</Suspense>
			
			<Switch>
				<Route path="/" element={<Home />} />
			</Switch>

			<Suspense fallback={<div>loading</div>}>
				<Footer />
			</Suspense>
		</Router>
	);
}

export default App;
