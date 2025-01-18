
export const categoriesData = {
   title: 'Categories Data 1',
   name: 'categoriesData',
   type: 'object',
   fields: [
    {title: 'Categories Data 1 Heading', name: 'categoriesDataHeading', type: 'string'},

    {
        title: 'Categories Card',
        name: 'categoriesCard',
        type: 'array',
        of: [
            {
                type: 'object',
                fields: [
                    {title: 'Card Image', name: 'cardImage', type: 'image'},
                    {title: 'Card Heading', name: 'cardheading', type: 'string'},
                    {title: 'Card Products text', name: 'cardProductstext', type: 'string'},
                ]
            }
        ]
    }

   ]
}