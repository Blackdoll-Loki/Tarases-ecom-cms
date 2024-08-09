import React from 'react';
import {BlockStack, Button, Card, Grid, InlineGrid, Text} from '@shopify/polaris';
import {EditIcon} from '@shopify/polaris-icons';

export default function CustomerNotesCard() {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="200">
        <InlineGrid columns="1fr auto">
          <Text as="h3" variant="headingSm">
            Notes
          </Text>
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
