import { PortableText } from "@portabletext/react";
import { useGetInfoQuery } from "../shared/sanityAPI"

export const Info = () => {

    const { isLoading, data } = useGetInfoQuery();
    console.log({data})
    
    return data ? 
    (
        <div id="info-page">
            <PortableText
                value={data}
            />
        </div>
    ) : <div>loading...</div>
}