import { defineType, defineField } from "sanity";
import { Icons } from "../../styles/SanityIcons";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
	name: "section",
	title: "Section",
	type: "document",
	icon: Icons.section,
	fields: [
		orderRankField({ type: "page" }),
		defineField({
			name: "name",
			type: "string",
		}),
		defineField({
            name: "icon",
			type: "string",
		}),
	],
	preview: {
		select: {
			title: "name",
		},
		prepare({ title }) {
			return {
				title,
				media: () => Icons.section,
			};
		},
	},
});
