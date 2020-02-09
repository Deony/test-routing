import React from "react";
import {Route} from "react-router-dom";

import {HomePage} from "./Pages/HomePage";
import {TeamsPage} from "./Pages/TeamsPage";


export const Main = () => (
	<main>
		<Route path='/home'
			   component={HomePage}/>
		<Route path='/teams'
			   component={TeamsPage}/>
	</main>
);
