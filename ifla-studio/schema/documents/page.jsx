import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";
import { SlugInput } from "sanity-plugin-prefixed-slug";
import { isSlugUnique } from "../../functions/isSlugUnique";
import { Icons } from "../../styles/SanityIcons";
import { getParentSlug } from "../../functions/getParentSlug";

export default defineType({
	name: "page",
	title: "Page",
	type: "document",
	icon: () => Icons.page,
	fields: [
		orderRankField({ type: "page" }),
		defineField({ name: "title", type: "string" }),
		defineField({
			name: "parent",
			type: "reference",
			to: [{ type: "section" }],
		}),
		defineField({
			name: "slug",
			type: "slug",
			components: {
				input: SlugInput,
			},
			options: {
				source: "title",
				// urlPrefix: (document) => {
				// 	console.log(document);
				// 	return `/${document.parent.name}/`;
				// },
				urlPrefix: async (document) => {
					const parent = await getParentSlug(document);
					return `/${parent}/`;
				},
				isUnique: isSlugUnique,
				maxLength: 30,
				storeFullUrl: true,
			},
		}),
		defineField({
			name: "content",
			type: "contentArray",
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare: ({ title }) => ({
			title,
			media: () => Icons.page,
		}),
	},
});
