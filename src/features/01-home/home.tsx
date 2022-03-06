import {  imageUrlFor, useGetHomePageQuery } from "../shared/sanityAPI"
import { useLocation } from 'react-router-dom';
import { match, __ , not} from 'ts-pattern'

export const Home = () => {

    const { isLoading, error, data } = useGetHomePageQuery()

    const imageURL = match(data)
        .with(not(__.nullish), (data) => imageUrlFor(data.homePageImage).width(350).url())
        .with(__.nullish, () => "loading...")
        .run()

    const homepageImage = match(isLoading)
        .with(true, () => <div className="loading-image">Loading...</div>)
        .with(false, () => <img src={imageURL} alt="homepage-image" id="homepage-image"/>)
        .run()

    return (
        <div id="homepage-container">
            <div className="img-spacer"></div>
                {homepageImage}
            <div className="img-spacer"></div>
        </div>
    )
}