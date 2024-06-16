import dayjs from 'dayjs'
import { useGetDiaryEntriesQuery } from "../shared/sanityAPI"
import {PortableText} from '@portabletext/react'
import { RenderImage } from "../shared/components/renderImage"
import { DiaryEntry } from '../02-diary/types'

const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export const Home = () => {

    const { data } = useGetDiaryEntriesQuery()

    const components = {
        types: {
            image: RenderImage
        }
    }

    const renderEntry = (entry: DiaryEntry, key: number) => {
        const blockContent = entry.text
        return (
            <div className="diary-entry" key={`diary-entry-${key}`}>
                <PortableText
                    value={blockContent}
                    components= {components}
                />
                {/* <p className="diary-entry-date">{postedDate}</p> */}
            </div>
        )
    }

    const renderEntries = () => (
        data ? data.map((entry, i) => renderEntry(entry, i)) : null
    )

    return (
        <div id="diary-container">
            {renderEntries()}
        </div>
    )
}
