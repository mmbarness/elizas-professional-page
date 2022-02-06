import { useGetDiaryEntriesQuery } from "../shared/sanityAPI"

export const Home = () => {

    const { data, error, isLoading, isFetching } = useGetDiaryEntriesQuery()

    console.log({data, error, isLoading, isFetching})

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}