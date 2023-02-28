import { defineType, defineField } from "sanity";
import { Icons } from "../../styles/SanityIcons";

export default defineType({
	name: "author",
	title: "Author",
	type: "document",
	icon: Icons.author,
	fields: [
		defineField({
			name: "name",
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
				media: () => Icons.author,
			};
		},
	},
});
