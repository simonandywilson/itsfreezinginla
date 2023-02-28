import { defineConfig, isDev } from "sanity";
import { deskTool } from "sanity/desk";
import { schema, singletonDocs, singletonActions } from "./schema";
import { structure, defaultDocumentNode } from "./structure";
import { visionTool } from "@sanity/vision";
import ToolMenuWithShopify from "./components/ToolMenuWithShopify";
import { SetRandomColourAction } from "./components/SetRandomColourAction";
import "./styles/studio.css"
import { projectDetails } from "./projectDetails";

export default defineConfig({
  ...projectDetails,
  title: 'It’s Freezing in LA!',
  basePath: `/studio`,
  plugins: [deskTool({structure, defaultDocumentNode}), ...(isDev ? [visionTool()] : [])],
  schema: {
    types: schema,
    templates: (templates) => templates.filter(({schemaType}) => !singletonDocs.has(schemaType)),
  },
  document: {
    actions: (input, context) => {
      if (context.schemaType === 'article') {
        return input.map((originalAction) =>
          originalAction.action === 'publish'
            ? SetRandomColourAction(originalAction, context)
            : originalAction
        )
      } else {
        return singletonDocs.has(context.schemaType)
          ? input.filter(({action}) => action && singletonActions.has(action))
          : input
      }
    },
  },
  studio: {
    components: {
      toolMenu: ToolMenuWithShopify,
    },
  },
})
