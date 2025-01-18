export const ContactPage = {
    title: 'Contact Page',
    name: 'contactPage',
    type: 'document',
    fields: [
        {
            title: 'Sections',
            name: 'sections',
            type: 'array',
            of: [
                {type: 'touchUS'},
                {type: 'varifications'}
            ]
        }
    ]
}