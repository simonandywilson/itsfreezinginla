import {TextInput, TextArea, Stack, Flex, Badge} from '@sanity/ui'
import React, {useCallback} from 'react'
import {useFormValue, set, unset} from 'sanity'

const get = (obj, path, defValue) => {
  if (!path) return undefined
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
  const raw = pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj)
  const result = Array.isArray(raw) ? raw[0].children[0].text : raw
  return result === undefined ? defValue : result
}

const PlaceholderStringInput = (props) => {
  const {elementProps, schemaType, onChange, value} = props
  const store = useFormValue([])
  const path = schemaType?.options?.field
  const proxyValue = get(store, path)

  const characterCount = value ? value.length : 0
  const placeholderLength = proxyValue ? proxyValue.length : 0
  const characterLimit = schemaType?.validation[0]?._rules?.find(
    (o) => o.flag === 'max'
  )?.constraint

  const tooLong =
    characterCount > 0 ? characterCount > characterLimit : placeholderLength > characterLimit

  const handleChange = useCallback(
    (event) => {
      const nextValue = event.currentTarget.value
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange]
  )

  return schemaType?.options?.type === 'text' ? (
    <Stack space={2}>
      <TextArea
        {...elementProps}
        defaultValue={value}
        placeholder={proxyValue}
        onChange={handleChange}
        style={{height: '75px'}}
      />
      {characterLimit && (
        <Flex justify="flex-end">
          <Badge tone={tooLong ? 'critical' : undefined}>
            {characterCount === 0 ? placeholderLength : characterCount}/{characterLimit}
          </Badge>
        </Flex>
      )}
    </Stack>
  ) : (
    <Stack space={2}>
      <TextInput
        {...elementProps}
        defaultValue={value}
        placeholder={proxyValue}
        onChange={handleChange}
      />
      {characterLimit && (
        <Flex justify="flex-end">
          <Badge tone={tooLong ? 'critical' : undefined}>
            {characterCount === 0 ? placeholderLength : characterCount}/{characterLimit}
          </Badge>
        </Flex>
      )}
    </Stack>
  )
}

export default PlaceholderStringInput
