import React from 'react';
import {BlockStack, Button, Card, InlineGrid, Text} from '@shopify/polaris';
import {EditIcon} from '@shopify/polaris-icons';

export default function CustomerNotesCard() {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="400">
        <BlockStack gap="200">
          <Text as="h2" variant="headingSm">
          Notes
          </Text>
          <Text as="p" variant="bodyMd">
            John Smith
          </Text>
        </BlockStack>
        <BlockStack gap="200">
          <InlineGrid columns="1fr auto">
            <Button
              icon={EditIcon}
              variant="tertiary"
              onClick={() => {}}
              accessibilityLabel="Edit"
            />
          </InlineGrid>
        </BlockStack>
      </BlockStack>
    </Card>
  );
}
