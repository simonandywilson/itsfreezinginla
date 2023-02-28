import { defineArrayMember, defineField } from "sanity";
import { ShoppingBag } from "lucide-react";

export default defineArrayMember({
	name: "shopModule",
	title: "Shop",
	type: "object",
	icon: <ShoppingBag strokeWidth={1.5} size={20} />,
	fields: [
		defineField({
			name: "type",
			type: "string",
			initialValue: "Shop",
			readOnly: true,
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Shop",
				media: <ShoppingBag strokeWidth={1.5} size={25} />,
			};
		},
	},
});
