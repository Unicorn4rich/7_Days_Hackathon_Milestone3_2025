export const cardBottomSection = {
    title: 'Card Bottom Section',
    name: 'cardBottomSection',
    type: 'object',
    fields: [
        {title: 'Social Info Text', name: 'socialInfoText', type: 'string'},
        {title: 'Social Info Text 2', name: 'socialInfoTextTwo', type: 'string'},
        
        {
            title: 'Follow Products',
            name: 'followProducts',
            type: 'object',
            fields: [
                {title: 'Product 1', name: 'product1', type: 'image'},
                {title: 'Product 2', name: 'product2', type: 'image'},
                {title: 'Product 3', name: 'product3', type: 'image'},
                {title: 'Product 4', name: 'product4', type: 'image'},
                {title: 'Product 5', name: 'product5', type: 'image'},
                {title: 'Product 6', name: 'product6', type: 'image'}
            ]
        }
    ]
}