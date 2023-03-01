import React from "react";
import { useRouteData } from "remix-utils";
import Product from "../shop/Product";

const ShopModule = () => {
	const {
		shopify: { allProducts },
	} = useRouteData(`root`);
	return (
		<div className={"flex justify-between p-4"}>
			<div className={"grid-layout"}>
				{allProducts.data.products.nodes.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
			<div className={"w-48 h-48 bg-slate-200"}></div>
		</div>
	);
};

export default ShopModule;
