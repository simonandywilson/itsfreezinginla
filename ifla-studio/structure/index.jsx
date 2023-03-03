import Iframe from 'sanity-plugin-iframe-pane'
import {resolvePreviewUrl} from './resolvePreviewUrl'
import {Icons} from '../styles/SanityIcons'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {map} from 'rxjs/operators'
import Emoji from 'a11y-react-emoji'
import {projectDetails} from '../projectDetails'

export const structure = (S, context) => {
  const schemaType = 'page'
  const categoryParents = `*[_type == "section"] | order(orderRank asc)`
  const {documentStore} = context

  return S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .schemaType('home')
        .child(S.editor().title('Home').schemaType('home').documentId('home')),
      S.listItem()
        .title('Content')
        .icon(() => Icons.content)
        .child(() =>
          documentStore.listenQuery(categoryParents).pipe(
            map((parents) => {
              return S.list()
                .title('Sections')
                .menuItems([
                  S.menuItem()
                    .title('Add Section')

                    .intent({type: 'create', params: {type: 'section'}}),
                ])
                .items([
                  orderableDocumentListDeskItem({
                    type: 'section',
                    title: 'Sections',
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
                      type: 'page',
                      title: parent.name,
                      icon: () => <Emoji style={{fontSize: '2rem'}} symbol={parent.icon} />,
                      id: `orderable-${parent._id}-pages`,
                      filter: `_type == "${schemaType}" && parent._ref == $parentId`,
                      params: {parentId: parent._id},
                      S,
                      context,
                    })
                  ),
                ])
            })
          )
        ),
      S.divider(),
      S.documentTypeListItem('article')
        .title('Articles')
        .icon(() => Icons.article),
      S.listItem()
        .title('Filtered Articles')
        .icon(() => Icons.filtered)
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('By Author')
                .icon(() => Icons.author)
                .child(
                  S.documentTypeList('author')
                    .title('Articles by Author')
                    .child((authorId) =>
                      S.documentList()
                        .title('Articles')
                        .filter('_type == "article" && $authorId == author._ref')
                        .params({
                          authorId,
                        })
                    )
                ),
              S.listItem()
                .title('By Topic')
                .icon(() => Icons.topic)
                .child(
                  S.documentTypeList('topic')
                    .title('Articles by Topic')
                    .child((topicId) =>
                      S.documentList()
                        .title('Topics')
                        .filter('_type == "topic" && $topicId == topic._ref')
                        .params({
                          topicId,
                        })
                    )
                ),
              S.listItem()
                .title('By Year')
                .icon(() => Icons.year)
                .child(() => {
                  const {apiVersion} = projectDetails
                  const client = context.getClient({apiVersion})
                  const type = 'article'
                  return client
                    .fetch('*[_type == "article" && defined(date)] {_id, _type, date}', {
                      type,
                    })
                    .then((docs) => {
                      // Create a map of years
                      const years = {}
                      docs.forEach((d) => {
                        const date = new Date(d.date)
                        const year = date.getFullYear()
                        if (!years[year]) {
                          years[year] = []
                        }
                        years[year].push(d._id)
                      })
                      return S.list()
                        .title('Articles by Year')
                        .id('year')
                        .items(
                          Object.keys(years).map((year) => {
                            return S.listItem()
                              .id(year)
                              .title(year)
                              .icon(() => Icons.year)
                              .child(
                                S.documentList()
                                  .id(type)
                                  .title(`Articles from ${year}`)
                                  .filter(`_id in $ids`)
                                  .params({ids: years[year]})
                              )
                          })
                        )
                    })
                }),
            ])
        ),

      S.divider(),
      S.listItem()
        .title('Products')
        .icon(() => Icons.product)
        .child(
          S.documentTypeList('product')
            .title('Products')
            // .defaultLayout('detail')
            .child(async (id) =>
              S.list()
                .title('Product')
                .items([
                  // Details
                  S.listItem()
                    .title('Details')
                    .icon(() => Icons.product)
                    // .icon(InfoOutlineIcon)
                    .child(S.document().schemaType('product').documentId(id)),
                  // Product variants
                  S.listItem()
                    .title('Variants')
                    .icon(() => Icons.variant)
                    .schemaType('productVariant')
                    .child(
                      S.documentList()
                        .title('Variants')
                        .schemaType('productVariant')
                        .filter(
                          `
                      _type == "productVariant"
                      && store.productId == $productId
                    `
                        )
                        .params({
                          productId: Number(id.replace('shopifyProduct-', '')),
                        })
                    ),
                ])
            )
        ),
      S.listItem()
        .title('Collections')
        .icon(() => Icons.collection)
        .schemaType('collection')
        .child(S.documentTypeList('collection')),
      S.divider(),
      S.listItem()
        .title('Colours')
        .icon(() => Icons.colour)
        .schemaType('colour')
        .child(S.documentTypeList('colour')),
      S.listItem()
        .title('Authors')
        .icon(() => Icons.author)
        .schemaType('author')
        .child(S.documentTypeList('author')),
      S.listItem()
        .title('Topics')
        .icon(() => Icons.topic)
        .schemaType('topic')
        .child(S.documentTypeList('topic')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .schemaType('settings')
        .child(S.editor().title('Settings').schemaType('settings').documentId('settings')),
    ])
}

export const defaultDocumentNode = (S, {schemaType, getClient}) => {
  const {apiVersion} = projectDetails
  const client = getClient({apiVersion})

  switch (schemaType) {
    case `article`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => resolvePreviewUrl(doc, client),
            // url: "http://localhost:3000/resource/preview?fullSlug=%2Farticles%2Fa-greener-future-for-council-housing-interview-with-john-boughton&secret=knml72jgxj",
            reload: {
              button: true, // default `undefined`
              revision: true, // boolean | number. default `undefined`. If a number is provided, add a delay (in ms) before the automatic reload on document revision
            },
          })
          // .options({
          //   url: `http://localhost:3000/resource/preview/articles/a-greener-future-for-council-housing-interview-with-john-boughton`,
          //   reload: {
          //     button: true,
          //   },
          // })
          .title('Preview'),
      ])

    default:
      return S.document().views([S.view.form()])
  }
}
