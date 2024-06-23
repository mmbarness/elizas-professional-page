import dayjs from 'dayjs'
import { match } from 'ts-pattern';
import { useGetDiaryEntriesQuery } from "../shared/sanityAPI"
import { PortableText } from '@portabletext/react'
import { RenderImage } from "../shared/components/renderImage"
import { DiaryEntry } from './types'

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
            </div>
        )
    }

    const renderEntries = () => (
        data ? [...data]
                .sort((a: DiaryEntry, b: DiaryEntry) => {
                    const orderRankA = a.orderRank.split("|")[0];
                    const orderRankB = b.orderRank.split("|")[0];
                    return match(Number(orderRankA) - Number(orderRankB))
                        .with(0, () => 1) // puts A before B
                        .otherwise(n => n)
                })
                .map((entry, i) => renderEntry(entry, i)) : null
    )

    return (
        <div id="diary-container">
            {renderEntries()}
        </div>
    )
}
