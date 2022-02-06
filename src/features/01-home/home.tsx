import { useGetDiaryEntriesQuery, useGetHobbyDeathQuery, useGetMFMQuery } from "../shared/sanityAPI"
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

    return (
        <div>
            <h1>Home</h1>
            {links.map((link, index) => <p key={index}>{link}</p>)}
        </div>
    )
}