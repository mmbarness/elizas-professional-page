import { useGetDiaryEntriesQuery } from "../shared/sanityAPI"

export const Diary = () => {

    const { isLoading, error, data } = useGetDiaryEntriesQuery()

    return (
        <div>
            <h1>Diary</h1>
        </div>
    )
}