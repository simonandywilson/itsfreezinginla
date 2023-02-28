import { defineArrayMember, defineField } from "sanity";
import { Columns } from "lucide-react";

export default defineArrayMember({
	name: "textColumnsModule",
	title: "Text Columns",
	type: "object",
	icon: <Columns strokeWidth={1.5} size={20} />,
	fields: [
		defineField({
			name: "text",
			type: "defaultBlock",
		}),
	],
	preview: {
		select: { subtitle: "text" },
		prepare({ subtitle }) {
			return {
				title: "Text Columns",
				media: <Columns strokeWidth={1.5} size={25} />,
				subtitle: subtitle ? subtitle[0]?.children[0]?.text : "",
			};
		},
	},
});
