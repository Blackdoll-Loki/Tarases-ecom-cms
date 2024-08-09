import React, {useCallback} from 'react';
import {BlockStack, Page} from '@shopify/polaris';
import {EAdminNavigation} from '~/admin/constants/navigation.constant';
import {ValidatedForm} from 'remix-validated-form';
import {ValidatedSubmitButton} from '~/admin/ui/ValidatedSubmitButton/ValidatedSubmitButton';
import {adminCustomersNewAction} from '~/.server/admin/actions/customers.new.action';
import { CustomersDefaultAddressForm } from '~/admin/components/Customer/DefaultAddress';
import CustomerNotesCard from '~/admin/components/Customer/CustomerNotesCard';
import { CustomersOverviewForm } from '~/admin/components/Customer/CustomersOverviewForm';
import { useLoaderData } from '@remix-run/react';
import { customerNewLoader } from '~/.server/admin/loaders/customer.new.loader';
import { CustomerNewFormValidator } from '~/admin/components/Customer/CustomerNewForm.validator';
import { TCustomerDto } from '~/.server/admin/dto/customer.dto';

export const action = adminCustomersNewAction;

export const loader = customerNewLoader;


export default function AdminCustomersNew() {
  const data = useLoaderData<typeof loader>();
  const customer = data.customer as TCustomerDto;
  console.log(customer)

  const primaryAction = useCallback(() => (
    <ValidatedSubmitButton text="save" variant="primary"/>
  ), []);

  return (
    <ValidatedForm validator={CustomerNewFormValidator} method="post">
      <Page
        title="New customer"
        backAction={{
          url: EAdminNavigation.users
        }}
        primaryAction={primaryAction()}
      >
        <BlockStack gap="500">
          <CustomersOverviewForm customer={customer}/>
          <CustomersDefaultAddressForm />
          <CustomerNotesCard />
        </BlockStack>
      </Page>
    </ValidatedForm>
  );
}
