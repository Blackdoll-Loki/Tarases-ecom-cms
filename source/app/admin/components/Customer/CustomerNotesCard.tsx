import React, { FC } from 'react';
import {BlockStack, Button, Card, Grid, InlineGrid, Text} from '@shopify/polaris';
import {EditIcon} from '@shopify/polaris-icons';
import { CustomersOverviewFormProps } from './CustomersOverviewForm';
import { ValidatedTextField } from '~/admin/ui/ValidatedTextField/ValidatedTextField';

export const CustomerNotesCard: FC<CustomersOverviewFormProps> = ({ customer }) => {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="200">
        <InlineGrid columns="1fr auto">
        <ValidatedTextField
            label="Notes"
            type="text"
            name="notes"
            autoComplete="notes"
            defaultValue={customer?.notes || ''}
          />
          <Button
            icon={EditIcon}
            variant="tertiary"
            onClick={() => {}}
            accessibilityLabel="Edit"
          />
        </InlineGrid>
        <Text as="p" variant="bodyMd">
          Notes are private and won't be shared with the customer.
        </Text>
      </BlockStack>
    </Card>
  );
}
