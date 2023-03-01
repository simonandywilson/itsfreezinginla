import React from "react";
import Topic from "../parts/Topic";
import { cx } from "class-variance-authority";

const ArticleBlockBanner = ({ article }) => {
	const { headline, intro, colour, author, media } = article;
	return (
		<div
			className={"w-full aspect-video p-6 flex flex-col justify-between gap-4"}
			style={{ background: colour ? colour : "#e3e8ef" }}
		>
			<div
				className={cx(
					"grid grid-rows-2 grid-cols-1 gap-4",
					"lg:grid-cols-3 lg:grid-rows-1"
				)}
			>
				<div>
					<h3 className={"text-6xl"}><Topic/>{headline ? headline : "Untitled article"}</h3>
				</div>
				<h4 className={cx("text-3xl columns-1 col-span-2 gap-4 ", "md:columns-2")}>
					{intro ? intro : "Intro text"}
				</h4>
			</div>
			<div className={"flex justify-between"}>
				{author.name && <h5>By {author.name}</h5>}
				{media.length > 0 && <h6>({media.join(", ")})</h6>}
			</div>
		</div>
	);
};

export default ArticleBlockBanner;
