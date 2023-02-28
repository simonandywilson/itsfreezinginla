import { defineField, defineType } from "sanity";
import { SlugInput } from "sanity-plugin-prefixed-slug";
import { isSlugUnique } from "../../functions/isSlugUnique";
import { Icons } from "../../styles/SanityIcons";

export default defineType({
	name: "article",
	title: "Article",
	type: "document",
	icon: () => Icons.article,
	fields: [
		defineField({
			name: "headline",
			type: "string",
		}),
		defineField({
			title: "Publication Date",
			name: "date",
			type: "date",
			options: {
				dateFormat: "DD-MM-YYYY",
				calendarTodayLabel: "Today",
			},
			initialValue: new Date().toLocaleDateString("fr-CA"),
		}),
		defineField({
			name: "slug",
			type: "slug",
			components: {
				input: SlugInput,
			},
			options: {
				source: "headline",
				urlPrefix: "/articles/",
				isUnique: isSlugUnique,
				maxLength: 30,
				storeFullUrl: true,
			},
		}),
		defineField({
			name: "topic",
			type: "reference",
			to: [{ type: "topic" }],
		}),
		defineField({
			name: "image",
			type: "imageObject",
		}),
		defineField({
			name: "media",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "grid",
				list: [
					{ title: "Text", value: "Text" },
					{ title: "Audio", value: "Audio" },
					{ title: "Video", value: "Video" },
				],
			},
			initialValue: ["Text"],
		}),
		defineField({
			name: "author",
			type: "reference",
			to: [{ type: "author" }],
		}),
		defineField({
			name: "colour",
			type: "reference",
			to: [{ type: "colour" }],
			readOnly: true,
			hidden: true,
		}),
		defineField({
			name: "intro",
			type: "text",
			rows: 4,
		}),
		defineField({
			name: "content",
			type: "contentArray",
		}),
	],
	orderings: [
		{
			title: "Publication Date, New",
			name: "publicationDateDesc",
			by: [{ field: "date", direction: "desc" }],
		},
		{
			title: "Publication Date, Old",
			name: "publicationDateAsc",
			by: [{ field: "date", direction: "asc" }],
		},
	],
	preview: {
		select: {
			title: "headline",
			subtitle: "date",
			media: "colour.colourLight",
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				subtitle: subtitle
					? new Date(subtitle).toLocaleDateString("en-UK", {
							day: "numeric",
							year: "numeric",
							month: "long",
					  })
					: "",
				media: <span style={{ background: media, height: "100%", width: "100%" }}></span>,
			};
		},
	},
});
