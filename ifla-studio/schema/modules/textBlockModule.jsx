import {  defineField } from "sanity";
import { AlignLeft } from "lucide-react";

export default {
	name: "textBlockModule",
	title: "Text Block",
	type: "object",
	icon: <AlignLeft strokeWidth={1.5} size={20} />,
	fields: [
		defineField({
			title: "Text",
			name: "text",
			type: "defaultBlock",
		}),
	],
	preview: {
		select: {
			subtitle: "text",
		},
		prepare({subtitle}) {
			return {
				title: "Text",
				media: <AlignLeft strokeWidth={1.5} size={25} />,
				subtitle: subtitle ? subtitle[0]?.children[0]?.text : "",
			};
		},
	},
};
