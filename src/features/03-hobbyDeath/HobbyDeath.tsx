import { useGetHobbyDeathQuery } from "../shared/sanityAPI"

export const HobbyDeath = () => {

    const { isLoading, error, data } = useGetHobbyDeathQuery()
    console.log(data)
    return (
        <div>
            <h1>Hobby Death</h1>
        </div>
    )
}