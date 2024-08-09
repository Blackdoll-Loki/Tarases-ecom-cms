import {Card, IndexTable, Link,} from '@shopify/polaris';
import React, {FC, useMemo} from 'react';
import type {NonEmptyArray} from '@shopify/polaris/build/ts/src/types';
import {IndexTableHeading} from '@shopify/polaris/build/ts/src/components/IndexTable/IndexTable';
import {EAdminNavigation} from '~/admin/constants/navigation.constant';
import {AdminUsersTableFilters} from '~/admin/components/UsersTable/UsersTableFilters';
import {IOffsetPaginationInfoDto} from '~/.server/shared/dto/offset-pagination-info.dto';
import {usePagination} from '~/admin/hooks/usePagination';
import { TCustomerDto } from '~/.server/admin/dto/customer.dto';
import { TCustomersLoaderData } from '~/.server/admin/loaders/customers.loader';

export interface CustomersTableProps {
  customers: TCustomerDto[];
  query?: TCustomersLoaderData['query'];
  pagination: IOffsetPaginationInfoDto;
}


export const CustomersTable: FC<CustomersTableProps> = ({customers, query, pagination}) => {
  const paginationProps = usePagination(pagination);
  const resourceName = useMemo(() => ({
    singular: 'user',
    plural: 'users',
  }), []);

  const headings: NonEmptyArray<IndexTableHeading> = useMemo(() => ([
    {title: 'Email'},
    {title: 'Full Name'},
    {title: 'Location'},
    {title: 'Orders'},
    {title: 'Amount spent'},
    {title: 'Created at'},
    {title: 'Updated at'},
    {title: 'Deleted at'},
  ]), []);

  const rowMarkup = customers.map(
    (
      {id, email, firstName, lastName, createdAt, updatedAt, deletedAt},
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        position={index}
      >
        <IndexTable.Cell>{firstName} {lastName}</IndexTable.Cell>
        <IndexTable.Cell>
          <Link url={`${EAdminNavigation.customers}/${id}`}>{email}</Link>
        </IndexTable.Cell>
        <IndexTable.Cell>Location</IndexTable.Cell>
        <IndexTable.Cell>Orders</IndexTable.Cell>
        <IndexTable.Cell>Amount spent</IndexTable.Cell>
        <IndexTable.Cell>{createdAt}</IndexTable.Cell>
        <IndexTable.Cell>{updatedAt}</IndexTable.Cell>
        <IndexTable.Cell>{deletedAt}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <Card padding="0">
      {/*<AdminUsersTableFilters query={query}/>*/}
      <IndexTable
        resourceName={resourceName}
        itemCount={customers.length}
        selectable={false}
        headings={headings}
        pagination={paginationProps}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
};
