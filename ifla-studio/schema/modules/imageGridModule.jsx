import { defineArrayMember, defineField } from "sanity";
import { AltTextDemo } from "../../components/AltTextDemo";
import { BlockContentIcon } from "@sanity/icons";
import { LayoutGrid } from "lucide-react";

export default defineArrayMember({
	name: "imageGridModule",
	title: "Image Grid",
	type: "object",
	icon: <LayoutGrid strokeWidth={1.5} size={20} />,
	fields: [
		defineField({
			name: "slide",
			type: "array",
			of: [{ type: "imageObject" }],
		}),
	],
	// preview: {
	// 	select: {
	// 		media: "asset",
	// 		subtitle: "alt",
	// 	},
	// 	prepare(selection) {
	// 		const { media, subtitle } = selection;
	// 		return {
	// 			title: "Image",
	// 			media: media || Icons.image,
	// 			subtitle: subtitle,
	// 		};
	// 	},
	// },
});
