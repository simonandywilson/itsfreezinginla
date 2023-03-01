import React from "react";
import {PortableText} from '../parts/PortableText';

const TextColumnsModule = ({ content }) => {
	return (
		<div className={"w-full columns-3"}>
			<PortableText text={content} />
		</div>
	);
};

export default TextColumnsModule;
