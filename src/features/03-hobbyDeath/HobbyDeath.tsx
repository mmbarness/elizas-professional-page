import { useGetHobbyDeathQuery } from "../shared/sanityAPI"

export const HobbyDeath = () => {

    const { isLoading, error, data } = useGetHobbyDeathQuery()
    
    return (
        <div>
            <h1>Hobby Death</h1>
        </div>
    )
}