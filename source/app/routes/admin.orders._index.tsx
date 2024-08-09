import { BlockStack, Box, Button, Card, Page, Text } from "@shopify/polaris";

export default function ordersPageIndex(){
  return(
    <Page
        title="Orders"
        actionGroups={[
          {
            title: 'More actions',
            actions: [
              {content: 'Duplicate'},
              {content: 'Print'},
              {content: 'Unarchive'},
              {content: 'Cancel order'},
            ],
          },
        ]}
      >
    <Box background="bg-surface" borderRadius="100" padding="400">
      <BlockStack gap="500">
        <Card roundedAbove="sm">
          <Text as="h2" variant="headingSm">
          Manually create orders and invoices
          </Text>
          <Box paddingBlockStart="200">
            <Text as="p" variant="bodyMd">
            Use draft orders to take orders over the phone, email invoices to customers, and collect payments.
            </Text>
          </Box>
        </Card>
        <BlockStack inlineAlign="center">
          <Box minWidth="100px">
            <Button variant="primary" fullWidth={false}>Create draft order</Button>;
          </Box>
        </BlockStack>
      </BlockStack>
    </Box>
  </Page>
  )
}
