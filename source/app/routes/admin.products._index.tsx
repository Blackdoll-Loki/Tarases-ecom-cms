import { BlockStack, Button, Card, InlineStack, Page,Text } from "@shopify/polaris";
import { PlusIcon } from '@shopify/polaris-icons';

export default function productsIndex(){
  return(
    <Page
    title="Products"
     >
        <Card roundedAbove="sm">
      <BlockStack gap="200">
        <Text variant="headingXl" as="h4">
          Add your products
        </Text>
        <BlockStack gap="200">
          <Text as="h3" variant="headingSm" fontWeight="medium">
          Start by stocking your store with products your customers will love
          </Text>
        </BlockStack>
        <InlineStack align="center">
            <Button
              icon={PlusIcon}
              variant="primary"
              onClick={() => {}}
              accessibilityLabel="Create shipping label"
            >
              Add product
            </Button>
        </InlineStack>
      </BlockStack>
    </Card>
  </Page>
  )
}
