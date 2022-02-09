import { SanityImage } from "../basicSanityTypes"
import { imageUrlFor } from "../sanityAPI"
import {getImageDimensions} from '@sanity/asset-utils'

export const RenderImage = ({value, isInline}: {value: SanityImage, isInline: boolean}) => {

    const {width, height} = getImageDimensions(value)
    const imageUrl = imageUrlFor(value).width(width).url()

    return (
        <img
          src={imageUrl}
          alt={value.alt || ' '}
          loading="lazy"
          style={{
            // Display alongside text if image appears inside a block text span
            display: isInline ? 'inline-block' : 'block',

          }}
        />
      )
}