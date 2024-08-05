import React, { FC, useState, useCallback } from 'react';
import { BlockStack, Layout, Button, Modal, TextContainer } from '@shopify/polaris';
import { TUserDto } from '~/.server/admin/dto/user.dto';
import { PrimaryInfoCard } from '~/admin/components/UsersSingle/PrimaryInfoCard';
import { RoleCard } from '~/admin/components/UsersSingle/RoleCard';
import { useFetcher } from '@remix-run/react';

export type UsersSingleProps = {
  user: TUserDto;
}

export const UsersSingle: FC<UsersSingleProps> = ({ user }) => {
  const [active, setActive] = useState(false);
  const fetcher = useFetcher();

  const handleChange = useCallback(() => setActive(!active), [active]);

  const handleDelete = async () => {
    fetcher.submit(
      { id: user.id, actionType: 'delete' },
      { method: 'post', action: `/admin/users/${user.id}` }
    );
  };

  return (
    <Layout>
      <Layout.Section>
        <BlockStack gap="500">
          <PrimaryInfoCard user={user} />
        </BlockStack>
      </Layout.Section>

      <Layout.Section variant="oneThird">
        <RoleCard user={user} />
      </Layout.Section>
      <Layout.Section variant="oneThird">
        <Button variant="primary" tone="critical" onClick={handleChange}>
          Delete User
        </Button>
      </Layout.Section>

      <Modal
        open={active}
        onClose={handleChange}
        title="Confirm Deletion"
        primaryAction={{
          content: 'Delete',
          destructive: true,
          onAction: handleDelete,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
              Are you sure you want to delete this user? This action cannot be undone.
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </Layout>
  );
};
