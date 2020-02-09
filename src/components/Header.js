import React from "react";
import {Link} from "react-router-dom";


export const Header = () => (
	<header className="App-header">
		<Link to='/home'>HOME</Link><br/>
		<Link to='/teams'>TEAM</Link>
	</header>
);