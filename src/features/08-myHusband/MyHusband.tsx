import { useGetMyHusbandQuery } from "../shared/sanityAPI"

export const MyHusband = () => {

    const { isLoading, error, data } = useGetMyHusbandQuery()
    console.log(data)
    return (
        <div>
            <h1>My Husband</h1>
        </div>
    )
}