import { defineArrayMember, defineField } from "sanity";
import { AltTextDemo } from "../../components/AltTextDemo";
import { BlockContentIcon } from "@sanity/icons";
import { ArrowLeftRight } from "lucide-react";

export default defineArrayMember({
	name: "carouselModule",
	title: "Carousel",
	type: "object",
	icon: <ArrowLeftRight strokeWidth={1.5} size={20} />,
	fields: [
		defineField({
			name: "slide",
			type: "array",
			of: [{ type: "imageObject" }, { type: "textObject" }],
		}),
	],
	preview: {
		select: {
				media: "slide.0.asset",
				subtitle: "slide",
			},
		prepare({ media, subtitle }) {
			return {
				title: "Carousel",
				media: media || <ArrowLeftRight strokeWidth={1.5} size={25} />,
				subtitle: subtitle ? `${Object.keys(subtitle).length} Slides` : "",
			};
		},
	},
});
