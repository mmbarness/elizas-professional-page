import { useGetMusicVideosQuery } from "../shared/sanityAPI"
import {Suspense, useCallback, useState, useEffect} from "react"
import ReactPlayer from "react-player/lazy"

export const MusicVideos = () => {

    const { isLoading, error, data } = useGetMusicVideosQuery()
    console.log(data)

    const renderMusicVideos = useCallback(
        () => {
            if (data) {
                return data.map((video, i) => (
                    <Suspense fallback={<div></div>}>
                        <ReactPlayer
                            url={video.link}
                            width="90%"
                            height= "100%"
                            controls={true}
                            className={`${i % 2 === 0 ? "left music-video" : "right music-video"}`}
                        />
                    </Suspense>
                ))
            }
        },
        [data]
    )

    return (
        <div id="music-video-container">
            {renderMusicVideos()}
        </div>
    )
}