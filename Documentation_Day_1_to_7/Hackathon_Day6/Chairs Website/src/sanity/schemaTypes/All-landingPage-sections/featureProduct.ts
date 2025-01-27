
export const featureProduct = {
    title: 'Feature Products',
    name: 'featureProducts',
    type: 'object',
    fields: [
        // aik bar
        {title: 'Feature Products Heading', name: 'featureProductsHeading', type: 'string',},

        // bar bar
        {
          title: 'Feature Cards',
          name: 'featureCards',
          type: 'array',
          of: [
            {
                type: 'object',
                fields: [
                    {title: 'Feature Card Image', name: 'cardImg', type: 'image'},
                    {title: 'Feature Card Heading', name: 'featureCardHeading', type: 'string'},
                    {title: 'Feature Card New Price', name: 'featureCardNewPrice', type: 'number'},
                    {title: 'Feature Card Old Price', name: 'featureCardOldPrice', type: 'number'},
                ]
            }
          ]

        }
    ]
}