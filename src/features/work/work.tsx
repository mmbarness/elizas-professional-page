import { useGetWorkPDFQuery } from "../shared/sanityAPI"

export const Work = () => {

    const { isLoading, error, data } = useGetWorkPDFQuery();

    console.log({data});

    return(
        <div>
            work page
        </div>
    )
}