import {  imageUrlFor, useGetHomePageQuery, useGetImageUrlQuery } from "../shared/sanityAPI"
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

export const Home = () => {
    //https://cdn.sanity.io/images/lnkrniw1/production/7fd37d7c1ec0fd60544a111e5cc6b22487c2c355-639x579.png
    const location = useLocation()

    const { isLoading, error, data } = useGetHomePageQuery()

    const imageURL = data ? imageUrlFor(data?.homePageImage).width(300).url() : ""

    return (
        <div id="homepage-container">
            <div className="img-spacer"></div>
            <img src={imageURL} alt="homepage-image" id="homepage-image"/>
            <div className="img-spacer"></div>
        </div>
    )
}