export const AboutPage = {           // web page like page
    title: 'About Page',
    name: 'aboutPage',
    type: 'document',
    fields: [
        {                     // all sections
            title: 'Sections',
            name: 'sections',
            type: 'array',
            of: [
                {type: 'aboutAndImage'},  // just one section
                {type: 'brandInfo'},
                {type: 'populerProducts'}
            ]
        }
    ]
}