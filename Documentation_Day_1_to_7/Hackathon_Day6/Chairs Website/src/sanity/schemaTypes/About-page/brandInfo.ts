export const brandInfo = {
    title: 'Brand Info',
    name: 'brandInfo',
    type: 'object',
    fields:[
        {title: 'Brand Info Heading', name: 'brandInfoHeading', type: 'string'},

        {
            title: 'Brand Info Cards',
            name: 'brandInfoCards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {title: 'Card Heading', name: 'cardHeading', type: 'string'},
                        {title: 'Card Discription', name: 'cardDiscription', type: 'string'},
                    ]
                }
            ]
        }
    ]
}