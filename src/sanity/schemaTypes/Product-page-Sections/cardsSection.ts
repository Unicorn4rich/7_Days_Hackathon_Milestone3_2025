export const cardsSection = {
    title: 'Cards Section',
    name: 'cardsSection',
    type: 'object',
    fields: [
        {
            title: 'Card',
            name: 'card',
            type: 'array',
            of: [
            {
                type: 'object',
                fields: [
                    {title: 'Card image', name: 'cardImg', type: 'image'},
                    {title: 'Card Heading', name: 'cardHeading', type: 'string'},
                    {title: 'Card New Price', name: 'cardNewPrice', type: 'number'},
                    {title: 'Card Old Price', name: 'cardOldPrice', type: 'number'}
                ]
            }
            ]
        }
    ]
}