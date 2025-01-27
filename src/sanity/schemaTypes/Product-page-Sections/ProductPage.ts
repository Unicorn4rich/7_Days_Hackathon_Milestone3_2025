export const ProductPage = {
    title: 'Product Page',
    name: 'productPage',
    type: 'document',
    fields: [
        {
            title: 'Sections',
            name: 'sections',
            type: 'array',
            of: [
                {type: 'cardsSection'},
                {type: 'cardBottomSection'}
            ]
        }
    ]
}