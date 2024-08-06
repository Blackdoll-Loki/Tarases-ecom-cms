import React, { useCallback, useState } from 'react';
import {useLoaderData} from '@remix-run/react';
import {Page} from '@shopify/polaris';
import {DeleteIcon} from '@shopify/polaris-icons';
import {EAdminNavigation} from '~/admin/constants/navigation.constant';
import {UsersSingle} from '~/admin/components/UsersSingle/UsersSingle';
import {adminUsersSingleLoader} from '~/.server/admin/loaders/users.single.loader';
import {adminUsersActions} from '~/.server/admin/actions/users.role.action';
import DeleteModal from '~/admin/components/UsersSingle/DeleteModal';

export const loader = adminUsersSingleLoader;

export const action = adminUsersActions;

export default function AdminUsersSingle() {
  const {user} = useLoaderData<typeof loader>();
  const [active, setActive] = useState(false);
  const toggleModal = useCallback(() => setActive((active) => !active), []);

  return (
    <Page
      title={user.fullName || ''}
      backAction={{
        url: EAdminNavigation.users
      }}
      secondaryActions={[
        {
          content: 'Delete',
          accessibilityLabel: 'Delete',
          destructive: true,
          icon: DeleteIcon,
          onAction: toggleModal,
        },
        {
          content: 'Security',
          accessibilityLabel: 'Security',
          url: `${EAdminNavigation.users}/${user.id}/security`
        },
      ]}
    >
      <UsersSingle user={user}/>
      <DeleteModal user={user} active={active} toggleModal={toggleModal}/>
    </Page>
  );
}
