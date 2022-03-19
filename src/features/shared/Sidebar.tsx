import {  useGetHomePageQuery, useGetImageUrlQuery } from "../shared/sanityAPI"
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

type homepageLinks = {
    "/": string,
    "/diary": string,
    "/hobby-death": string,
    "/my-favorite-monument": string,
    "/self-maintaining": string,
    "/sincerely-yours": string,
    "/music-videos": string,
    "/my-husband": string,
    "/cv": string,
}

export const Sidebar = () => {

    const location = useLocation()

    const linksObj: any = { //TODO: ideally this doesn't need to be typed any to work
        "/":  "homepage-link",
        "/diary":"diary-link",
        "/hobby-death": "hd-link",
        "/my-favorite-monument": "mfm-link",
        "/self-maintaining": "sm-link",
        "/sincerely-yours": "sy-link",
        "/music-videos": "mv-link",
        "/my-husband": "mh-link",
        "/cv": "cv-link",
    }

    const links = [
        // <Link to= '/diary' id="diary-link" className = "homepage-links incomplete-page">diary / archive</Link>,
        <Link to= '/hobby-death' id="hd-link" className = "homepage-links complete-page">Hobby Death</Link>,
        // <Link to= '/my-favorite-monument' id="mfm-link" className = "homepage-links incomplete-page">My Favorite Monument</Link>,
        // <Link to= '/self-maintaining' id="sm-link" className = "homepage-links incomplete-page">Self Maintaining</Link>,
        // <Link to= '/sincerely-yours' id="sy-link" className = "homepage-links incomplete-page">Sincerely, Yours</Link>,
        <Link to= '/music-videos' id="mv-link" className = "homepage-links complete-page">music videos</Link>,
        <Link to= '/my-husband' id="mh-link" className = "homepage-links complete-page">My Husband</Link>,
    ]

    useEffect(() => {
        const path = location.pathname
        const link:string = linksObj[path]
        const activeLink = document.getElementById(`${link}`)
        const allLinks = Array.from(document.getElementsByClassName("homepage-links"))
        if (activeLink) {
            allLinks.forEach(link => {
                link.id === activeLink.id ? link.classList.add("active-link") : link.classList.remove("active-link")
            })
        }

    },[location])

    return (
        <div id="sidebar-container">
            <div id="sidebar-links">
                <Link to= '/' id="homepage-link" className = "homepage-links complete-page">Eliza Lu Doyle</Link>
                {links.map((link, index) => <p className="sidebar-link-container" key={index}>{link}</p>)}
                <p id="cv-link-container" className="sidebar-link-container">
                    <Link to= '/cv' id="cv-link" className = "homepage-links">CV</Link>
                </p>
            </div>
        </div>
    )
}