import {Suspense, useCallback, useState, useEffect} from "react"
import ReactPlayer from "react-player/lazy"
import { useGetMyHusbandQuery } from "../shared/sanityAPI"
import { MyHusband as MyHusbandObjType } from "./types" 

export const MyHusband = () => {

    const { isLoading, error, data } = useGetMyHusbandQuery()
    console.log(data)

    const renderLink = (linkObj: MyHusbandObjType) => {
        return (
            <div className="link-container">
                <a href={linkObj.Link} target="_blank" rel="noopener noreferrer">{linkObj.titleToDisplay}</a>
            </div>
        )
    }

    const renderVideo = (videoObj: MyHusbandObjType) => (
        <div className="player-wrapper">
            <Suspense fallback={<div></div>}>
                <ReactPlayer
                    url={videoObj.video}
                    width="90%"
                    height= "90%"
                    controls={true}
                    className="my-husband-video react-player"
                />
            </Suspense>
        </div>
    )

    const renderOnLoad = () => (
        data?.map((obj:MyHusbandObjType) => (renderIndex[obj.type](obj))
    ))

    const renderIndex: {"link": Function, "video": Function} = { 
        "link": renderLink,
        "video": renderVideo
    }

    return (
        <div id="my-husband-container">
            {isLoading ? <div>Loading...</div> : renderOnLoad()}
        </div>
    )
}