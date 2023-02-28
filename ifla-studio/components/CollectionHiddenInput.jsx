import { WarningOutlineIcon } from '@sanity/icons'
import { Box, Card, Flex, Stack, Text } from '@sanity/ui'
import React from 'react'
import { useFormValue } from 'sanity'
import { collectionUrl } from '../utils/shopifyUrls'

const CollectionHiddenInput = (props) => {
  const store = useFormValue(["store"])

  const shopifyCollectionUrl = collectionUrl(store?.id)

  const isDeleted = store?.isDeleted

  return (
    <Card padding={4} radius={2} shadow={1} tone="critical">
      <Flex align="flex-start">
        <Text size={2}>
          <WarningOutlineIcon />
        </Text>
        <Box flex={1} marginLeft={3}>
          <Box>
            <Text size={2} weight="semibold">
              This collection is hidden
            </Text>
          </Box>
          <Stack marginTop={4} space={2}>
            <Text size={1}>It has been deleted from Shopify.</Text>
          </Stack>
          {!isDeleted && shopifyCollectionUrl && (
            <Box marginTop={4}>
              <Text size={1}>
                →{' '}
                <a href={shopifyCollectionUrl} target="_blank">
                  View this collection on Shopify
                </a>
              </Text>
            </Box>
          )}
        </Box>
      </Flex>
    </Card>
  )
}

export default CollectionHiddenInput
