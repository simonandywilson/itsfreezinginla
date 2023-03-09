import {Stack, Card, Container, Inline, Button, Dialog, Badge, Flex} from '@sanity/ui'
import {Grip} from 'lucide-react'
import {useCallback, useState, useEffect} from 'react'
import {useFormValue, useClient} from 'sanity'
import styled from 'styled-components'
import { BitmapProcessor } from './BitmapProcessor'

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 0.375rem;
  aspect-ratio: 1/1;
  object-fit: cover;
`

// const Bitmapper = (source) => {
//   Jimp.read(source)
//     .then((img) => {
//       return img
//         .resize(256, 256) // resize
//         .quality(60) // set JPEG quality
//         .greyscale() // set greyscale
//         .getBase64Async(Jimp.AUTO, (err, res) => {
//           return res
//         })
//     })
//     .catch((err) => {
//       console.error(err)
//     })
//  }

export const BitmapImageEditor = (props) => {
  const rawImageAsset = useFormValue([`bitmapImage`])
  const [image, setImage] = useState(undefined)
  const [open, setOpen] = useState(false)
  const onClose = useCallback(() => setOpen(false), [])
  const onOpen = useCallback(() => setOpen(true), [])
    const client = useClient({ apiVersion: '2023-01-01' })
    
  useEffect(() => {
    async function fetchTypes() {
      const res = await client.fetch(`*[_id == $imageId][0].url`, {
        imageId: rawImageAsset.asset._ref,
      })
      setImage(res)
    }
    if (!image && open) fetchTypes()
  }, [open, image])
    

  return (
    <>
      <Stack space={3}>
        <>{props.renderDefault(props)}</>
        <Flex>
          <Button
            onClick={onOpen}
            text="Bitmap Studio"
            icon={<Grip size={20} />}
            disabled={!rawImageAsset}
          />
        </Flex>
      </Stack>
      {open && (
        <Dialog
          header="Bitmap Editor"
          id="bitmap-editor"
          onClose={onClose}
          zOffset={1000}
          width={1.5}
        >
          <Card padding={4}>
            <Stack space={4}>
              <Inline space={4}>
                <ImagePreview source={image} caption={'Original'} />
                <ImagePreview source={image} caption={'Bitmapped'} prominent />
              </Inline>
              <Flex>
                <Button onClick={()=>BitmapProcessor(image)} text="Create Bitmap" />
              </Flex>
            </Stack>
          </Card>
        </Dialog>
      )}
    </>
  )
}

const ImagePreview = ({source, caption, prominent}) => {
  return (
    <Container width={0}>
      <Card radius={2} shadow={1} padding={2}>
        <Stack space={2}>
          <Container>
            <Badge tone={prominent && 'primary'}>{caption}</Badge>
          </Container>
          <Image
            src={source}
            alt={''}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '0.45rem',
              aspectRatio: '1/1',
              objectFit: 'cover',
            }}
          />
        </Stack>
      </Card>
    </Container>
  )
}
