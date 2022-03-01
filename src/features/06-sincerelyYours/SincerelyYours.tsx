import { useGetSincerelyYoursQuery } from "../shared/sanityAPI"

export const SincerelyYours = () => {

    const { isLoading, error, data } = useGetSincerelyYoursQuery()

    return (
        <div>
            <h1>Sincerely Yours</h1>
        </div>
    )
}