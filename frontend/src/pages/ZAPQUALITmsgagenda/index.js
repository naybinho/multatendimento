import React, { useEffect } from "react";
import openSocket from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(1)
	},

	paper: {
		padding: theme.spacing(2),
		display: "flex",
		alignItems: "center",
	},

	settingOption: {
		marginLeft: "auto",
	},
	margin: {
		margin: theme.spacing(1),
	},
}));


const ZAPQUALITmsgagenda = () => {
	const classes = useStyles();

	useEffect(() => {
		const socket = openSocket(process.env.REACT_APP_BACKEND_URL);
		return () => {
			socket.disconnect();
		};
	}, []);

	return (
		<div className={classes.root}> 
		<iframe title="ZAPQUALITmsgagenda" src='https://docs.google.com/spreadsheets/d/1ZPUfLVgbFG6YAkCmd3hYPbwoolsAXRph34Oh_49bZ5o/edit?usp=sharing' height='576' width='100%' frameBorder="0"/>
		</div>
	);
};

export default ZAPQUALITmsgagenda;