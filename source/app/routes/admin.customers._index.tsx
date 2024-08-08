import { useRouteLoaderData } from "@remix-run/react";
import { BlockStack, Box, Button, InlineStack, Page } from "@shopify/polaris";
import { adminDashboardLoader } from "~/.server/admin/loaders/dashboard.loader";

export const loader = adminDashboardLoader;

export default function AdminCustomersIndex(){
  return (
    <Page
      fullWidth
      title="Customers"
      primaryAction={{
        content: 'Add customer',
        icon: PlusIcon,
        accessibilityLabel: 'Create user',
        url: EAdminNavigation.usersCreate,
      }}
    >
      <AdminUsersTable users={data.users} query={data.query} pagination={data.pagination}/>
    </Page>
  )
}
