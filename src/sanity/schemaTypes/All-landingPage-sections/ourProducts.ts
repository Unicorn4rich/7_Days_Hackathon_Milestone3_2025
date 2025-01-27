export const ourProducts = {
    title: 'Our Products Section',
    name: 'ourProducts',
    type: 'object',
    fields: [
        // aik bar
        {title: 'Our Products Heading', name: 'ourProductsHeading', type: 'string',},

        // bar bar
        {
          title: 'Our Product Cards',
          name: 'ourProductCards',
          type: 'array',
          of: [
            {
                type: 'object',
                fields: [
                    {title: 'Our Card Image', name: 'ourCardImg', type: 'image'},
                    {title: 'Our Card Heading', name: 'ourCardHeading', type: 'string'},
                    {title: 'Our Card New Price', name: 'ourCardNewPrice', type: 'number'},
                    {title: 'Our Card Old Price', name: 'ourCardOldPrice', type: 'number'},
                ]
            }
          ]

        }
    ]
}