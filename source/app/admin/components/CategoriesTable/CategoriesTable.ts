import {Card, IndexTable, Link,} from '@shopify/polaris';
import React, {FC, useMemo} from 'react';
import type {NonEmptyArray} from '@shopify/polaris/build/ts/src/types';
import {IndexTableHeading} from '@shopify/polaris/build/ts/src/components/IndexTable/IndexTable';
import {EAdminNavigation} from '~/admin/constants/navigation.constant';
import {UserRoleBadge} from '~/admin/components/UsersTable/UserRoleBadge';
import type {TAdminUsersLoaderData} from '~/.server/admin/loaders/users.loader';
import {AdminUsersTableFilters} from '~/admin/components/UsersTable/UsersTableFilters';
import {IOffsetPaginationInfoDto} from '~/.server/shared/dto/offset-pagination-info.dto';
import {usePagination} from '~/admin/hooks/usePagination';
import { TCategoryDto } from '~/.server/admin/dto/category.dto';

export interface UsersTableProps {
  categories: TCategoryDto[];
  query?: TAdminUsersLoaderData['query'];
  pagination: IOffsetPaginationInfoDto;
}


export const CategoriesTable: FC<UsersTableProps> = ({categories, query, pagination}) => {
  const paginationProps = usePagination(pagination);
  const resourceName = useMemo(() => ({
    singular: 'category',
    plural: 'categories',
  }), []);

  const headings: NonEmptyArray<IndexTableHeading> = useMemo(() => ([
    {title: 'Email'},
    {title: 'Full Name'},
    {title: 'Role'},
    {title: 'Created at'},
    {title: 'Updated at'},
    {title: 'Deleted at'},
  ]), []);

  const rowMarkup = users.map(
    (
      {id, email, role, fullName, createdAt, updatedAt, deletedAt},
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        position={index}
      >
        <IndexTable.Cell>
          <Link url={`${EAdminNavigation.users}/${id}`}>{email}</Link>
        </IndexTable.Cell>
        <IndexTable.Cell>{fullName}</IndexTable.Cell>
        <IndexTable.Cell><UserRoleBadge role={role}/></IndexTable.Cell>
        <IndexTable.Cell>{createdAt}</IndexTable.Cell>
        <IndexTable.Cell>{updatedAt}</IndexTable.Cell>
        <IndexTable.Cell>{deletedAt}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <Card padding="0">
      <AdminUsersTableFilters query={query}/>
      <IndexTable
        resourceName={resourceName}
        itemCount={users.length}
        selectable={false}
        headings={headings}
        pagination={paginationProps}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
};
