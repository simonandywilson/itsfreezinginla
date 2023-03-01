import { Link } from "@remix-run/react";
import React from "react";
import ArticleBlock from "~/components/article/ArticleBlock";

const ArticlesModule = ({ content }) => {
	return (
		<ul className={"grid-layout"}>
			{content.articles.map((article) => {
                return (
					<li key={article._id} className={"w-full"}>
						<Link to={article.slug}>
							<ArticleBlock article={article} />
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default ArticlesModule;
