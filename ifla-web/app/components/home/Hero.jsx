import React from "react";

const Hero = ({ hero }) => {
	const { colour } = hero;
	return (
		<div
			className={"w-full aspect-video p-4 flex flex-col justify-between gap-4"}
			style={{ background: colour ? colour : "#dfdfdf" }}
		></div>
	);
};

export default Hero;
