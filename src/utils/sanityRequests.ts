import '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { homepageRequest } from '../types/sanityTypes';
const sanityClient = require('@sanity/client')
const today = new Date();
const todaysUTCDate= `${today.getUTCFullYear()}-${today.getUTCMonth()}-${today.getUTCDate()}`

const client = sanityClient({
	projectId: 'lnkrniw',
	dataset: 'production',
	apiVersion: todaysUTCDate,
	useCdn: true,
})

export const fetchHomePageInfo = async () => {
	const query = `*[_type == "homePage"]{_id, homePageText, socials, homePageImage,}`
	try {
		const result = await client.fetch(query)
		return result
	} catch (error:any) {
		let errorObj = {...error, 'message': 'Error fetching home page info'}
		console.log({errorObj})
		return errorObj
	}
}

export const sanityImager = (sourceImage: any) => {
  	const builder = imageUrlBuilder(client)
  	return builder.image(sourceImage)
}
