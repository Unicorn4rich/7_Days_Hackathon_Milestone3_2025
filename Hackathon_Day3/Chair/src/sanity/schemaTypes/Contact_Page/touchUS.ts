export const touchUS = {
    title: 'Touch US',
    name: 'touchUS',
    type: 'object',
    fields: [
        {
            title: 'Address',
            name: 'dddress',
            type: 'object',
            fields: [
                {title: 'Area', name: 'area', type: 'string'},
                {title: 'City, Country, Postal Code', name: 'CityCountryPostal', type: 'string'},
            ]
        },
        {
            title: 'Phone',
            name: 'phone',
            type: 'object',
            fields: [
                {title: 'Mobile', name: 'mobile', type: 'string'},
                {title: 'Hotline', name: 'hotline', type: 'string'},
            ]
        },
        {
            title: 'Working Time',
            name: 'workingTime',
            type: 'object',
            fields: [
                {title: 'Start Day to End Day Timings', name: 'startEndTimgs', type: 'string'},
                {title: 'Start Day to End Day Timings 2', name: 'startEndTimgs2', type: 'string'},
            ]
        },

    ]
}