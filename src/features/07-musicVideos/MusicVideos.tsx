import { useGetMusicVideosQuery } from "../shared/sanityAPI"

export const MusicVideos = () => {

    const { isLoading, error, data } = useGetMusicVideosQuery()
    console.log(data)
    return (
        <div>
            <h1>Music Videos</h1>
        </div>
    )
}