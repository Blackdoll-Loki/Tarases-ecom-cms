import { useRouteLoaderData } from "@remix-run/react";
import { BlockStack, Box, Button, InlineStack, Page } from "@shopify/polaris";
import { Fragment } from "react/jsx-runtime";
import { adminDashboardLoader } from "~/.server/admin/loaders/dashboard.loader";

export const loader = adminDashboardLoader;

export default function AdminCustomersIndex(){
  return (
    <Page title="Customers">
      <Box padding="400" width="586px" background="bg-surface" borderRadius="400" shadow="300">
        <BlockStack gap="500">
          <h2 className="Polaris-Text--root Polaris-Text--headingLg">Everything customers-related in one place</h2>
          <p className="Polaris-Text--root Polaris-Text--bodySm">Manage customer details, see customer order history, and group customers into segments.</p>
          <Box>
            <InlineStack align="start">
              <Button variant="primary">Add customer</Button>
            </InlineStack>
          </Box>
        </BlockStack>
      </Box>
    </Page>
  )
}
