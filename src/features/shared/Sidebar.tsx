import {  useGetHomePageQuery, useGetImageUrlQuery, useGetWorkPDFQuery } from "../shared/sanityAPI"
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import useMediaQuery from "../../utils/useMediaQuery";

export const Sidebar = () => {

    const location = useLocation();

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
    };

    const { isLoading, error, data } = useGetWorkPDFQuery();

    const orientation = useMediaQuery("(orientation: landscape)") ? "landscape" : "portrait";

    const links = [
        // <Link to= '/diary' id="diary-link" className = "homepage-links incomplete-page">diary / archive</Link>,
        <Link to= '/recently' id="recently-link" className = "recently-links">Recently</Link>,
        <Link to= '/info' id="info-link" className = "homepage-links">Info</Link>,
        <a href={data?.url} target="blank" id="work-pdf" className="homepage-links">Work</a>,

    ];

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

    },[linksObj, location])

    return (
        <div id="sidebar-container" className={orientation}>
            <div id="sidebar-links">
                <Link to= '/' id="homepage-link" className = "sidebar-link-container">Eliza Lu Doyle</Link>
                {links.map((link, index) => <p className="sidebar-link-container" key={index}>{link}</p>)}
            </div>
        </div>
    )
}
