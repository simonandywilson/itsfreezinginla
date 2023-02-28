import { defineArrayMember, defineField } from "sanity";
import { Heading } from "lucide-react";

export default defineArrayMember({
	name: "headingModule",
	title: "Heading",
	type: "object",
	icon: <Heading strokeWidth={1.5} size={20} />,
	fields: [
		defineField({
			name: "heading",
			type: "string",
		}),
	],
    preview: {
        select: {subtitle: "heading"},
		prepare({subtitle}) {
			return {
				title: "Heading",
                media: <Heading strokeWidth={1.5} size={25} />,
                subtitle: subtitle || ""
			};
		},
	},
});
