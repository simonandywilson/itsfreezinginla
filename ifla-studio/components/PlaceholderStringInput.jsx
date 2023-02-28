import { Box, Text, TextInput, Tooltip } from '@sanity/ui'
import React, { useCallback } from 'react'
import { useFormValue } from 'sanity'

const get = (obj, path, defValue) => {
  if (!path) return undefined
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
  const result = pathArray.reduce(
    (prevObj, key) => prevObj && prevObj[key],
    obj
  )
  return result === undefined ? defValue : result
}

const PlaceholderStringInput = (props) => {
  const { elementProps, schemaType, onChange, value } = props
  const store = useFormValue([])
  const path = schemaType?.options?.field
  const proxyValue = get(store, path)

  const handleChange = useCallback(
    (event) =>
      onChange(
        event.currentTarget.value ? set(event.currentTarget.value) : unset()
      ),
    [onChange]
  )

  return (
    <TextInput
      {...elementProps}
      defaultValue={value}
      placeholder={proxyValue}
      onChange={handleChange}
    />
  )
}

export default PlaceholderStringInput
