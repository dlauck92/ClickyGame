//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Clicky Game - Pokemon Edition!</h1>
		<h2>Click on any starting pokemon to earn a point, but don't click on the same picture more than once. Click all 12 pokemon, and you win!</h2>
	</header>
);
export default Jumbotron;
