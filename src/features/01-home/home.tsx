import dayjs from 'dayjs'
import { useGetDiaryEntriesQuery } from "../shared/sanityAPI"
import {PortableText} from '@portabletext/react'
import { RenderImage } from "../shared/components/renderImage"
import { DiaryEntry } from '../02-diary/types'

const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
export const Home = () => {

    const { isLoading, error, data } = useGetDiaryEntriesQuery()

    const components = {
        types: {
            image: RenderImage
        }
    }

    const renderEntry = (entry: DiaryEntry) => {

        const blockContent = entry.text
        const postedDate = dayjs(entry._createdAt, "YYYY-MM-DDTHH:mm:ssZ").format("MMMM D YYYY").toLocaleLowerCase()

        const {title} = entry

        return (
            <div className="diary-entry">
                <h3 className="diary-entry-title">{title}</h3>
                <PortableText
                    value={blockContent}
                    components= {components}
                />
                <p className="diary-entry-date">{postedDate}</p>
            </div>
        )
    }

    const renderEntries = () => (
        data ? data.map(entry => renderEntry(entry)) : null
    )

    return (
        <div id="diary-container">
            {renderEntries()}
        </div>
    )
}