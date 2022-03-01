export type SocialLink = {
    displayText: string,
    link: string,
    title: string,
    _key: string,
    _type: string
}

export type ImageRef = {
    asset: {
        _ref: string,
        _type: string
    },
    _type: "image"
}

export type TextBlock ={
    _key: 'string',
    _type: 'block',
    children: Array<{
        _key: 'string',
        _type: 'span',
        marks: Array<any>,
        text: string
    }>,
    markDefs: Array<any>,
    style: string
}

export type homepageRequest = {
    _id: string,
    homePageImage: ImageRef 
    homePageText: TextBlock,
    socials: Array<SocialLink>
}

// _id: 'dfbb19dc-671d-4e98-8104-5c4983ba0981',
// homePageImage: {
//   _type: 'image',
//   asset: {
//     _ref: 'image-ef461044091042ca4e90f8735023255a1df4fa77-680x458-jpg',
//     _type: 'reference'
//   }
// },
// homePageText: [
//   {
//     _key: '8e8b1d8e11a6',
//     _type: 'block',
//     children: [
//       {
//         _key: '34b6baf6e2ba',
//         _type: 'span',
//         marks: [],
//         text: 'test body'
//       }
//     ],
//     markDefs: [],
//     style: 'normal'
//   }
// ],
// socials: [
//   {
//     _key: '1ff96fd98f5b',
//     _type: 'linksField',
//     displayText: 'test link display',
//     link: 'http://www.nytimes.com',
//     title: 'test link'
//   },
//   {
//     _key: 'b869884fb13e',
//     _type: 'linksField',
//     displayText: 'test display link2',
//     link: 'https://www.newyorker.com/',
//     title: 'test link2'
//   }
// ]