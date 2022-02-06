import { useGetSelfMaintainingQuery } from "../shared/sanityAPI"

export const SelfMaintaining = () => {

    const { isLoading, error, data } = useGetSelfMaintainingQuery()
    console.log(data)

    return (
        <div>
            <h1>Self Maintaining</h1>
        </div>
    )
}