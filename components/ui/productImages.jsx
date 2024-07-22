/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material"
import { useState } from "react"

export default function ProductImages({ imagesArray }) {
  const [focusImage, setFocusImage] = useState(imagesArray[0])
  return (
    <Box sx={{
      display: 'flex',
      gap: 2,
      height: '100%',
      width: '100%',
      flexDirection: {
        xs: 'column-reverse',
        sm: 'row'
      },
    }}>
      {/* small product photos */}
      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        gap: 2,
        padding:'4px',
        flexDirection: {
          xs: 'row',
          sm: 'column'
        },
        width: {
          sm: '30%'
        },
        overflow:'auto'
      }}>
        {
          imagesArray.map((image, index) => <Box component={'picture'}
            onMouseOver={() => setFocusImage(image)}
            key={index}
            sx={{
              height: '100%',
              flexGrow: 1,
              aspectRatio: 1,
              outline: focusImage.src===image.src && '4px solid var(--primary-color)'

            }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }}
            />
          </Box>)
        }
      </Box>

      {/* Main product photo */}
      <Box component={'picture'} sx={{
        width: '100%',
      }}>
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          src={focusImage.src}
          alt={focusImage.alt} />
      </Box>
    </Box>
  )
}