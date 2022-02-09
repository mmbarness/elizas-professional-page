import {  useGetHomePageQuery, useGetImageUrlQuery } from "../shared/sanityAPI"
import {Link} from 'react-router-dom'

export const Home = () => {

    const links = [
        <Link to= '/diary'>diary / archive</Link>,
        <Link to= '/hobby-death'>Hobby Death</Link>,
        <Link to= '/my-favorite-monument'>My Favorite Monument</Link>,
        <Link to= '/self-maintaining'>Self Maintaining</Link>,
        <Link to= '/sincerely-yours'>Sincerely Yours</Link>,
        <Link to= '/music-videos'>Music Videos</Link>,
        <Link to= '/my-husband'>My Husband</Link>,
    ]

    const { isLoading, error, data } = useGetHomePageQuery()
    const imgQuery = data?.homePageImage.asset._ref
    console.log(data, imgQuery)

    const { 
        isLoading: imageLoading, 
        error: imageError, 
        data: imageUrl
    } = useGetImageUrlQuery(
        imgQuery,
        {
            skip: !imgQuery,
        }
    )

    console.log(imageUrl)

    return (
        <div>
            <Link to ="/">home</Link>
            <div id="homepage-links">
                {links.map((link, index) => <p key={index}>{link}</p>)}
            </div>

        </div>
    )
}