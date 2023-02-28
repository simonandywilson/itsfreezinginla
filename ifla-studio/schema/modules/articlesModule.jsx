import { defineArrayMember, defineField } from "sanity";
import { Newspaper } from "lucide-react";

export default defineArrayMember({
	name: "articlesModule",
	title: "Articles",
	type: "object",
	icon: <Newspaper strokeWidth={1.5} size={20} />,
	fields: [
		defineField({
			name: "type",
			type: "string",
			initialValue: "Articles",
			readOnly: true,
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Articles",
				media:  <Newspaper strokeWidth={1.5} size={25} />,
			};
		},
	},
});
