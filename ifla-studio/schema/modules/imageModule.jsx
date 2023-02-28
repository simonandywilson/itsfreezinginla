import { defineArrayMember, defineField } from "sanity";
import { AltTextDemo } from "../../components/AltTextDemo";
import { BlockContentIcon } from "@sanity/icons";
import { Image } from "lucide-react";

export default defineArrayMember({
	name: "imageModule",
	title: "Image",
	type: "object",
	icon: <Image strokeWidth={1.5} size={20} />,
	fields: [
		defineField({
			name: "image",
			type: "imageObject",
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
