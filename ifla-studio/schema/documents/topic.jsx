import { defineType, defineField } from "sanity";
import {Icons} from '../../styles/SanityIcons'

export default defineType({
	name: "topic",
	title: "Topic",
	type: "document",
	icon: () => Icons.topic,
	fields: [
		defineField({
			name: "topic",
			type: "string",
		}),
	],
});
