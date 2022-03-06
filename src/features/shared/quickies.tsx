import dayjs from 'dayjs'
import { CoreResponse } from './basicSanityTypes'

export const postedDate = (entry: CoreResponse) => dayjs(entry._createdAt, "YYYY-MM-DDTHH:mm:ssZ").format("MMMM D YYYY").toLocaleLowerCase()

export const returnLayout = () => window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'