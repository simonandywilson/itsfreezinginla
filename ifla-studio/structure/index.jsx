import Iframe from "sanity-plugin-iframe-pane";
import { resolvePreviewUrl } from "./resolvePreviewUrl";
import { Icons } from "../styles/SanityIcons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { map } from "rxjs/operators";
import Emoji from "a11y-react-emoji";
import { projectDetails } from "../projectDetails";

export const structure = (S, context) => {
	const schemaType = "page";
	const categoryParents = `*[_type == "section"] | order(orderRank asc)`;
	const { documentStore } = context;

	return S.list()
		.id("root")
		.title("Content")
		.items([
			S.listItem()
				.title("Home")
				.schemaType("home")
				.child(S.editor().title("Home").schemaType("home").documentId("home")),
			S.listItem()
				.title("Content")
				.icon(() => Icons.content)
				.child(() =>
					documentStore.listenQuery(categoryParents).pipe(
						map((parents) => {
							return S.list()
								.title("Sections")
								.menuItems([
									S.menuItem()
										.title("Add Section")

										.intent({ type: "create", params: { type: "section" } }),
								])
								.items([
									orderableDocumentListDeskItem({
										type: "section",
										title: "Sections",
										icon: () => Icons.section,
										S,
										context,
									}),
									S.divider(),
									...parents.map((parent) =>
										// S.listItem({
										// 	id: parent._id,
										// 	title: parent.name,
										// 	schemaType: "page",
										// 	child: () =>
										// 		S.documentTypeList("page")
										// 			.title("Page")
										// 			.filter(
										// 				`_type == "${schemaType}" && parent._ref == $parentId`
										// 			)
										// 			.params({ parentId: parent._id })
										// 			.initialValueTemplates([
										// 				S.initialValueTemplateItem("page-child", {
										// 					parentId: parent._id,
										// 				}),
										// 			]),

										// })
										orderableDocumentListDeskItem({
											type: "page",
											title: parent.name,
											icon: () => (
												<Emoji
													style={{ fontSize: "2rem" }}
													symbol={parent.icon}
												/>
											),
											id: `orderable-${parent._id}-pages`,
											filter: `_type == "${schemaType}" && parent._ref == $parentId`,
											params: { parentId: parent._id },
											S,
											context,
										})
									),
								]);
						})
					)
				),
			S.divider(),
			S.documentTypeListItem("article")
				.title("Articles")
				.icon(() => Icons.article),
			S.listItem()
				.title("Filtered Articles")
				.icon(() => Icons.filtered)
				.child(
					S.list()
						.title("Filters")
						.items([
							S.listItem()
								.title("By Author")
								.icon(() => Icons.author)
								.child(
									S.documentTypeList("author")
										.title("Articles by Author")
										.child((authorId) =>
											S.documentList()
												.title("Articles")
												.filter(
													'_type == "article" && $authorId == author._ref'
												)
												.params({
													authorId,
												})
										)
								),
						])
				),

			S.divider(),
			S.listItem()
				.title("Products")
				.icon(() => Icons.product)
				.child(
					S.documentTypeList("product")
						.title("Products")
						// .defaultLayout('detail')
						.child(async (id) =>
							S.list()
								.title("Product")
								.items([
									// Details
									S.listItem()
										.title("Details")
										// .icon(InfoOutlineIcon)
										.child(S.document().schemaType("product").documentId(id)),
									// Product variants
									S.listItem()
										.title("Variants")
										.schemaType("productVariant")
										.child(
											S.documentList()
												.title("Variants")
												.schemaType("productVariant")
												.filter(
													`
                      _type == "productVariant"
                      && store.productId == $productId
                    `
												)
												.params({
													productId: Number(
														id.replace("shopifyProduct-", "")
													),
												})
										),
								])
						)
				),
			S.listItem()
				.title("Collections")
				.icon(() => Icons.collection)
				.schemaType("collection")
				.child(S.documentTypeList("collection")),
			S.divider(),
			S.listItem()
				.title("Colours")
				.icon(() => Icons.colour)
				.schemaType("colour")
				.child(S.documentTypeList("colour")),
			S.listItem()
				.title("Authors")
				.icon(() => Icons.author)
				.schemaType("author")
				.child(S.documentTypeList("author")),
			S.listItem()
				.title("Topics")
				.icon(() => Icons.topic)
				.schemaType("topic")
				.child(S.documentTypeList("topic")),
			S.divider(),
			S.listItem()
				.title("Settings")
				.schemaType("settings")
				.child(S.editor().title("Settings").schemaType("settings").documentId("settings")),
		]);
};

export const defaultDocumentNode = (S, { schemaType, getClient }) => {
	const { apiVersion } = projectDetails();
	const client = getClient({ apiVersion });

	switch (schemaType) {
		case `record`:
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url: (doc) => resolvePreviewUrl(doc, client),
						reload: { button: true },
					})
					.title("Preview"),
			]);

		default:
			return S.document().views([S.view.form()]);
	}
};
