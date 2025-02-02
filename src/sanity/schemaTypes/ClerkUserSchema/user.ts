export const userSchema = {
    title: 'User',
    name: 'user',
    type: 'document',
    fields: [
        {
            title: 'User Id',
            name: 'userId',
            type: 'string',
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string',
        },
        {
            title: 'Password',
            name: 'password',
            type: 'string',
        },
        {
            title: 'User Image',
            name: 'userImage',
            type: 'url',
        },
    ]
}