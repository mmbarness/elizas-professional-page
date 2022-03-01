import { useGetMFMQuery } from "../shared/sanityAPI"

export const MyFavoriteMonument = () => {

    const { isLoading, error, data } = useGetMFMQuery()

    return (
        <div>
            <h1>My Favorite Monument</h1>
        </div>
    )
}