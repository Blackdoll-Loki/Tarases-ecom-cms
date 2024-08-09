import {json, LoaderFunctionArgs, redirect} from '@remix-run/node';
import {authenticator} from '~/.server/admin/services/auth.service';
import {EAdminNavigation} from '~/admin/constants/navigation.constant';
import { TCustomerDto } from '../dto/customer.dto';

export async function customerNewLoader({request}: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: EAdminNavigation.authLogin,
  });

  // Create an empty customer object with default values
  const emptyCustomer: TCustomerDto = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
  };

  return json({ customer: emptyCustomer });
}
