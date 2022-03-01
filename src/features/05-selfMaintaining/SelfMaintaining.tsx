import { useGetSelfMaintainingQuery } from "../shared/sanityAPI"

export const SelfMaintaining = () => {

    const { isLoading, error, data } = useGetSelfMaintainingQuery()

    return (
        <div>
            <h1>Self Maintaining</h1>
        </div>
    )
}