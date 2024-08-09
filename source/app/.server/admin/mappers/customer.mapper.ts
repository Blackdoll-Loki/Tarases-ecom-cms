import {Customer} from '@prisma/client';
import {TCustomerDto} from '~/.server/admin/dto/customer.dto';

export const customerMapper = (customer: Customer): TCustomerDto => {
  return {
    id: String(customer.id),
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone ? customer.phone : undefined,
    notes: customer.notes ? customer.notes : undefined,
    createdAt: customer.createdAt.toJSON(),
    updatedAt: customer.updatedAt.toJSON(),
    deletedAt: customer.deletedAt ? customer.deletedAt.toJSON() : null,
  };
};
