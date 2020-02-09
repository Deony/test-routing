import React from "react";
import { Route, Link } from 'react-router-dom';

import { TeamType } from "../TeamType/TeamType";


export const TeamsPage = (props) => {
	console.log("props", props);
	
	return (
		<div>
			<h1>Team page</h1>
			<ul>
				<li><Link to={'/teams/football'}>Team 1 - Football</Link></li>
				<li><Link to={'/teams/basketball'}>Team 2 - Basketball</Link></li>
				<li><Link to={'/teams/e'}>Team 2</Link></li>
			</ul>
			
			<hr/>
			
			<Route path={'/teams/:teamType'}
				   component={TeamType} />
		</div>
	);
};
