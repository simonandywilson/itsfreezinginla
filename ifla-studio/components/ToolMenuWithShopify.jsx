import React from "react";
import ShopifyIcon from "../styles/ShopifyIcon";
import { Flex, Card, Button } from "@sanity/ui";

const ToolMenuWithShopify = (props) => {
	return (
		<Flex justify={"space-between"}>
			<Card flex={1}>
				<>{props.renderDefault(props)}</>
			</Card>
			<form
				action="https://admin.shopify.com/store/its-freezing-in-la/products"
                target="_blank"
                style={{marginRight: "0.5rem"}}
			>
				<Button
					icon={ShopifyIcon}
					mode="ghost"
					text="View Shopify"
					type="submit"
				/>
			</form>
		</Flex>
	);
};

export default ToolMenuWithShopify;
