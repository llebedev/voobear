/* @refresh reload */
import { render } from "solid-js/web"

import "./index.css"
import App from "./App"
import videos from "./videos/video"
import { Router, Route } from "@solidjs/router"

const root = document.getElementById("root")

render(
	() => (
		<Router>
			<Route path="/voobear/" component={App} />
			<Route path="/voobear/video/:id/:video" component={videos} />
		</Router>
	),
	root
)
