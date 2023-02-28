import { defineType, defineField } from "sanity";
import { Icons } from "../../styles/SanityIcons";

export default defineType({
	name: "settings",
	title: "Settings",
	type: "document",
	icon: () => Icons.settings,
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "shortTitle",
			type: "string",
		}),
		defineField({
			name: "seoTitle",
			type: "string",
		}),
	],
});
