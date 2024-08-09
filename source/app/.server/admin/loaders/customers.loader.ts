import {json, LoaderFunctionArgs} from '@remix-run/node';
import {prisma} from '~/.server/shared/utils/prisma.util';
import {withZod} from '@rvf/zod';
import {z} from 'zod';
import {$Enums, Prisma} from '@prisma/client';
import type {SerializeFrom} from '@remix-run/server-runtime';
import {IOffsetPaginationInfoDto} from '~/.server/shared/dto/offset-pagination-info.dto';
import { customerMapper } from '../mappers/customer.mapper';

type UserOrderByWithRelationInput = Prisma.UserOrderByWithRelationInput;

//http://localhost:3000/admin/users?take=1&skip=0&q=ecomcms&role=ADMIN,STUFF&accountStatus=active


export enum ECustomerSortVariant {
  id_asc = 'id_asc',
  id_desc = 'id_desc',
  fullName_asc = 'fullName_asc',
  fullName_desc = 'fullName_desc',
  email_asc = 'email_asc',
  email_desc = 'email_desc',
  createdAt_asc = 'createdAt_asc',
  createdAt_desc = 'createdAt_desc',
  updatedAt_asc = 'updatedAt_asc',
  updatedAt_desc = 'updatedAt_desc',
  deletedAt_asc = 'deletedAt_asc',
  deletedAt_desc = 'deletedAt_desc',
}

export const sortValueToField = <O extends object>(value: string) => {
  const [field, order] = value.split('_');
  return {
    [field]: order
  } as O;
};

export const customersSortValueToFieldValue = (sortValue: ECustomerSortVariant) => {
  switch (sortValue) {
    case ECustomerSortVariant.id_asc:
      return {id: 'asc'};
    case ECustomerSortVariant.id_desc:
      return {id: 'desc'};
    case ECustomerSortVariant.fullName_asc:
      return {fullName: 'asc'};
    case ECustomerSortVariant.fullName_desc:
      return {fullName: 'desc'};
    case ECustomerSortVariant.email_asc:
      return {email: 'asc'};
    case ECustomerSortVariant.email_desc:
      return {email: 'desc'};
    case ECustomerSortVariant.createdAt_asc:
      return {createdAt: 'asc'};
    case ECustomerSortVariant.createdAt_desc:
      return {createdAt: 'desc'};
    case ECustomerSortVariant.updatedAt_asc:
      return {updatedAt: 'asc'};
    case ECustomerSortVariant.updatedAt_desc:
      return {updatedAt: 'desc'};
    case ECustomerSortVariant.deletedAt_asc:
      return {deletedAt: 'asc'};
    case ECustomerSortVariant.deletedAt_desc:
      return {deletedAt: 'desc'};
  }
};

export const customerQueryValidator = withZod(
  z.object({
    take: z.coerce.number().int().positive().optional(),
    skip: z.coerce.number().int().nonnegative().optional(),
    q: z.string().optional(),
    sort: z.nativeEnum(ECustomerSortVariant).optional()
  })
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function customersLoader({request}: LoaderFunctionArgs) {
  const {searchParams} = new URL(request.url);
  const {data} = await customerQueryValidator.validate(
    searchParams
  );


  let take = 2;
  let skip = 0;
  let searchQuery: Prisma.CustomerWhereInput | undefined;
  let orderBy: Prisma.CustomerOrderByWithRelationInput = { id: 'desc' as const };


  if (data?.take) {
    take = data.take;
  }

  if (data?.skip) {
    skip = data.skip;
  }

  if (data?.q) {
    searchQuery = {
      OR: [
        {email: {contains: data?.q, mode: 'insensitive' as const}},
        { firstName: { contains: data.q, mode: 'insensitive' } },
        { lastName: { contains: data.q, mode: 'insensitive' } }      ]
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sortExample = data?.sort ? customersSortValueToFieldValue(data.sort) : {id: 'desc'};

  if (data?.sort) {
    orderBy = sortValueToField<UserOrderByWithRelationInput>(data.sort);
  }

  const pagination: IOffsetPaginationInfoDto = {
    take,
    skip,
    hasNext: false,
    hasPrevious: skip > 0,
    total: 0,
    count: 0
  };

  const customers = await prisma.customer.findMany({
    take,
    skip,
    where: {
      ...searchQuery,
    },
    orderBy
  });

  pagination.count = customers.length;
  pagination.total = await prisma.customer.count({
    where: {
      ...searchQuery,
    }
  });

  pagination.hasNext = skip + take < pagination.total;

  return json({customers: customers.map(customerMapper), query: data, pagination});
}

export type TCustomersLoaderData = SerializeFrom<typeof customersLoader>;
