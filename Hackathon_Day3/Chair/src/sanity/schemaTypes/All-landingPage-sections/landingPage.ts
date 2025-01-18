
export const landingPage = {
    title: 'Landing Page',
    name: 'landingPage',
    type: 'document',
    fields:[
       {
        title: "All Sections",
        name: 'allSections',
        type: 'array',            // Click karte jaenge aik new input milta jaega or is array me multiple input list bana sakty hain. 
        of: [
            {type: 'hero'},       // 0 index object item
            {type: 'featureProducts'},
            {type: 'header'},
            {type: 'featureTopLogos'},
            {type: 'categoriesData'},
            {type: 'categoriesDataTwo'},
            {type: 'ourProducts'}
        ]
       }
    ]
}