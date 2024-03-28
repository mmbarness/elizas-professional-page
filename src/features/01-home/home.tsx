import dayjs from 'dayjs'
import { useGetHomePageQuery, imageUrlFor } from "../shared/sanityAPI"
import { match, P } from 'ts-pattern'

const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export const Home = () => {

    const { isLoading: homepageLoading, data: homeData } = useGetHomePageQuery();

    const imageURL = match(homeData)
        .with(P.not(P.nullish), (data) => imageUrlFor(data.homePageImage).width(500).url())
        .with(P.nullish, () => "loading...")
        .run()

    const homepageImage = match(homepageLoading)
        .with(true, () => <div className="loading-image">Loading...</div>)
        .with(false, () => <img src={imageURL} alt="homepage" id="homepage-image"/>)
        .run()

    return (
        <div id="homepage-container">
            <div id="img-spacer-1"></div>
                {homepageImage}
            <div id="img-spacer-2"></div>
        </div>
    )
}
