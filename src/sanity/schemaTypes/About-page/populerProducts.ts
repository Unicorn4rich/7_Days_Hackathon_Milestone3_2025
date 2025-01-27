export const populerProducts = {
    title: 'Populer Products',
    name: 'populerProducts',
    type: 'object',
    fields: [

        // one time
        { title: 'Popular Products Heading',name: 'popularProductsHeading', type: 'string',},

        // again and agian
        {
            title: 'Popular Cards',
            name: 'popularCards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {title: 'Card Image', name: 'cardImage', type: 'image'},
                        {title: 'Card Heading', name: 'cardHeading', type: 'string'},
                        {title: 'Card Price', name: 'cardPrice', type: 'number'},
                    ]
                }
            ]
        }

    ]
}