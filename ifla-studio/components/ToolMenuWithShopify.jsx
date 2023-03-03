import React from "react";
import ShopifyIcon from "../styles/ShopifyIcon";
import { Flex, Card, Button } from "@sanity/ui";

const ToolMenuWithShopify = (props) => {
	return (
    <Flex justify={'space-between'}>
      <Card flex={1}>
        <>{props.renderDefault(props)}</>
      </Card>
      <form
        action="https://its-freezing-in-la.myshopify.com/admin"
        target="_blank"
        style={{marginRight: '0.5rem'}}
      >
        <Button icon={ShopifyIcon} mode="ghost" text="View Shopify" type="submit" />
      </form>
    </Flex>
  )
};

export default ToolMenuWithShopify;
