import React, { Fragment } from "react";
import {Football} from "../Team/Footbal";
import {Basketball} from "../Team/Basketball";
import {EmptyTeam} from "../Team/EmptyTeam";


export const TeamType = ({match}) => {
	console.log('TEAM:', match);
	const { teamType } = match.params;
	
	return (
		<Fragment>
			{(() => {
				switch (teamType) {
					case "football":   return <Football/>;
					case "basketball": return <Basketball/>;
					default: return <EmptyTeam />;
				}
			})()}
		</Fragment>
	)
};
