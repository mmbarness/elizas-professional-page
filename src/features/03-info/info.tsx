import { PortableText } from "@portabletext/react";
import { useGetInfoQuery } from "../shared/sanityAPI"
import useMediaQuery from "../../utils/useMediaQuery";

export const Info = () => {

    const { data } = useGetInfoQuery();

    const orientation = useMediaQuery("(orientation: landscape)") ? "landscape" : "portrait";

    return data ?
    (
        <div id="info-page" className={orientation}>
            <PortableText
                value={data}
            />
        </div>
    ) : <div>loading...</div>
}
