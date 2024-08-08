/*import React, {useCallback} from 'react';
import {Page} from '@shopify/polaris';
import {EAdminNavigation} from '~/admin/constants/navigation.constant';
import {usersNewFormValidator} from '~/admin/components/UsersNewForm/UsersNewForm.validator';
import {ValidatedForm} from 'remix-validated-form';
import {ValidatedSubmitButton} from '~/admin/ui/ValidatedSubmitButton/ValidatedSubmitButton';
import {adminCustomersNewAction} from '~/.server/admin/actions/customers.new.action';
import { CustomersDefaultAddressForm } from '~/admin/components/Customer/DefaultAddress';
import CustomerNotesCard from '~/admin/components/Customer/CustomerNotesCard';

export const action = adminCustomersNewAction;

export default function AdminCustomersNew() {
  const primaryAction = useCallback(() => (
    <ValidatedSubmitButton text="save" variant="primary"/>
  ), []);

  return (
    <ValidatedForm validator={usersNewFormValidator} method="post">
      <Page
        title="New customer"
        backAction={{
          url: EAdminNavigation.users
        }}
        primaryAction={primaryAction()}
      >
        <CustomersDefaultAddressForm/>
        <CustomersDefaultAddressForm />
        <CustomerNotesCard />
      </Page>
    </ValidatedForm>
  );
}*/
