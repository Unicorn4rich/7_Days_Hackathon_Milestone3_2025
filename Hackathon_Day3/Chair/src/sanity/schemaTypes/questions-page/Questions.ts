export const questions = {
    title: 'Questions Page',
    name: 'questions',
    type: 'document',
    fields: [
        {
            title: 'Questions Card',
            name: 'questionsCard',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {title: 'question', name: 'question', type: 'string'},
                        {title: 'Answer', name: 'answer', type: 'string'},
                    ]
                }
            ]
        }
    ]
}