export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            titile : 'Name',
            type: 'string'
        },
        {
            name: 'company',
            titile : 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            titile : 'ImgUrl',
            type: 'image',
            option: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            titile : 'Feedback',
            type: 'string'
        },
    ]
}