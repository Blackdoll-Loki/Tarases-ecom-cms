import {Page, Badge,  Card, Layout, BlockStack, TextField, Button, InlineGrid, Icon} from '@shopify/polaris';
import {
  OrderIcon
} from '@shopify/polaris-icons';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';

function PageExample() {
  return (
    <Page
      backAction={{content: 'Customers', url: EAdminNavigation.customers}}
      title="Ukraine • Customer for about 7 hours"
      titleMetadata={<Badge tone="success">Paid</Badge>}
      subtitle="Perfect for any pet"
      compactTitle

      pagination={{
        hasPrevious: true,
        hasNext: true,
      }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Card roundedAbove="sm">
              <BlockStack gap="400">
                <BlockStack gap="200">
                  <TextField as="h2" variant="headingSm">
                    Last order placed
                  </TextField>
                  <TextField as="p" variant="bodyMd">
                    This customer hasn’t placed any orders yet
                  </TextField>
                </BlockStack>
                <BlockStack gap="200">
                  <Icon
                    source={OrderIcon}
                    tone="base"
                  />
                </BlockStack>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <BlockStack gap="500">

          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
