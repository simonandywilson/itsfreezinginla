import {useCallback, useState, useRef, useEffect} from 'react'
import {Stack, Flex, Card, Inline, Label, Badge, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'
import useDebounce from '../functions/useDebounce'
import useClickOutside from '../functions/useClickOutside'

import {wcagContrastChecker} from '@mdhnpm/wcag-contrast-checker'
import namer from 'color-namer'
import {HexColorPicker, HexColorInput} from 'react-colorful'
import {useClient, useFormValue} from 'sanity'
import styled from 'styled-components'
import * as styles from "./colour.module.css"

const Preview = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
`

const Picker = styled.div`
  position: absolute;
  border-radius: 0.375rem;
  top: 0;
  z-index: 50;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
`

const titleCase = (str) => {
  let splitStr = str.toLowerCase().split(' ')
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }
  return splitStr.join(' ')
}

export const AccessibleColourInput = (props) => {
  const {elementProps, onChange, value = '', schemaType} = props
  const popover = useRef()
  const documentId = useFormValue(['_id'])

  const defaultColour = schemaType?.options?.defaultColour
    ? schemaType?.options?.defaultColour
    : '#ffffff'

  const [colour, setColour] = useState(value ? value : defaultColour)
  const [colourName, setColourName] = useState('')
  const [isOpen, toggle] = useState(false)
  const [regularAA, setRegularAA] = useState('')
  const [regularAAA, setRegularAAA] = useState('')
  const [largeAA, setLargeAA] = useState('')
  const [largeAAA, setLargeAAA] = useState('')
  const debouncedColour = useDebounce(colour, 1000)
  const close = useCallback(() => toggle(false), [])
  useClickOutside(popover, close)
  const client = useClient({apiVersion: '2023-01-01'})

  const handleChange = useCallback(
    (event) => {
      const colourValue = event
      setColour(colourValue)
      onChange(colourValue ? set(colourValue) : unset())
    },
    [onChange]
  )

  console.log(colour)

  useEffect(() => {
    if (value !== debouncedColour) {
      onChange(set(debouncedColour))
    }
    setColourName(titleCase(namer(colour).ntc[0].name))
  }, [debouncedColour])

  useEffect(() => {
    const contrast = wcagContrastChecker(
      schemaType?.options?.type ? schemaType?.options?.type : '#000000',
      colour
    )
    contrast.regularText.aa ? setRegularAA('positive') : setRegularAA('critical')
    contrast.largeText.aa ? setLargeAA('positive') : setLargeAA('critical')
    contrast.regularText.aaa ? setRegularAAA('positive') : setRegularAAA('critical')
    contrast.largeText.aaa ? setLargeAAA('positive') : setLargeAAA('critical')
  }, [colour, document?.text?.value])

  useEffect(() => {
    if (documentId && schemaType?.options?.nameField) {
      client
        .patch(documentId)
        .set({[schemaType.options.nameField]: colourName})
        .commit()
    }
  }, [colourName])

  return (
    <Stack space={2}>
      <Card shadow={1} radius={2}>
        <Stack>
          <Card padding={4} style={{background: '#f6f6f6'}}>
            <Stack space={2}>
              <Label size={1}>WCAG Compliance Results:</Label>
              <Inline space={2}>
                <Badge tone={regularAA}>AA Regular</Badge>
                <Badge tone={largeAA}>AA Large</Badge>
                <Badge tone={regularAAA}>AAA Regular</Badge>
                <Badge tone={largeAAA}>AAA Large</Badge>
              </Inline>
            </Stack>
          </Card>
          <Card shadow={1} radius={2} padding={4}>
            <Stack space={4}>
              <Flex display={'flex'}>
                <Card marginRight={3}>
                  <div style={{position: 'relative'}}>
                    <Preview style={{backgroundColor: colour}} onClick={() => toggle(true)} />
                    {isOpen && (
                      <Picker ref={popover}>
                        <HexColorPicker color={colour} onChange={setColour} />
                      </Picker>
                    )}
                  </div>
                </Card>
                <Card flex={3}>
                  {/* <TextInput onChange={handleChange} value={value} /> */}
                  <HexColorInput
                    {...elementProps}
                    color={value}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </Card>
              </Flex>
              <Label size={1}>{colourName}</Label>
            </Stack>
          </Card>
        </Stack>
      </Card>
    </Stack>
  )
}
