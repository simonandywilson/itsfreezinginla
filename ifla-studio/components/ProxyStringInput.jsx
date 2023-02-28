import { LockIcon } from '@sanity/icons'
import { Box, Text, TextInput, Tooltip } from '@sanity/ui'
import React from 'react'
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

const ProxyStringInput = (props) => {
  const { elementProps, placeholder, schemaType } = props
  const store = useFormValue([])
  const path = schemaType?.options?.field
  const proxyValue = get(store, path)

  return (
    <Tooltip
      content={
        <Box padding={2}>
          <Text muted size={1}>
            This value is set in Shopify (<code>{path}</code>)
          </Text>
        </Box>
      }
      portal
    >
      <TextInput
        {...elementProps}
        value={proxyValue}
        iconRight={LockIcon}
        placeholder={placeholder}
        readOnly={true}
      />
    </Tooltip>
  )
}

export default ProxyStringInput
