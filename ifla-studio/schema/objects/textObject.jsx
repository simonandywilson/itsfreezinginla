import { defineArrayMember, defineField } from "sanity";
import { AlignLeft } from "lucide-react";

export default defineArrayMember({
	name: "textObject",
	title: "Text",
	type: "object",
	icon: <AlignLeft strokeWidth={1.5} size={20} />,
	fields: [
		defineField({
			name: "text",
			type: "defaultBlock",
		}),
	],
	preview: {
		select: {
			subtitle: "text",
		},
		prepare(selection) {
            const { subtitle } = selection;
			return {
				title: "Text",
				media: <AlignLeft strokeWidth={1.5} size={25} />,
				subtitle: subtitle ? subtitle[0]?.children[0]?.text : "",
			};
		},
	},
});
