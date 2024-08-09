import { useLoaderData } from "@remix-run/react";
import { Page } from "@shopify/polaris";
import { customersLoader } from "~/.server/admin/loaders/customers.loader";
import {PlusIcon} from '@shopify/polaris-icons';
import { CustomersTable } from "~/admin/components/Customer/CustomersTable";
import { EAdminNavigation } from "~/admin/constants/navigation.constant";

export const loader = customersLoader;

export default function AdminCustomersIndex(){
  const data = useLoaderData<typeof loader>();

  return (
    <Page
      fullWidth
      title="Customers"
      primaryAction={{
        content: 'Add customer',
        icon: PlusIcon,
        accessibilityLabel: 'Create user',
        url: `${EAdminNavigation.customers}/new`,
      }}
    >
      <CustomersTable customers={data.customers} query={data.query} pagination={data.pagination}/>
    </Page>
  )
}
