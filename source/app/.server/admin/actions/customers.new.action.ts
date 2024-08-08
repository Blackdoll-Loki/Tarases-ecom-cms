import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import { hashPassword } from "~/.server/shared/utils/auth.util";
import { prisma } from "~/.server/shared/utils/prisma.util";
import { CustomerNewFormValidator } from "~/admin/components/Customer/CustomerNewForm.validator";
import { EAdminNavigation } from "~/admin/constants/navigation.constant";
import { joinFirstName } from "~/admin/utils/user.util";
import { authenticator } from "../services/auth.service";

export async function adminCustomersNewAction({request}: ActionFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: EAdminNavigation.authLogin,
  });

  // validate form data
  const data = await CustomerNewFormValidator.validate(
    await request.formData()
  );

  if (data.error) {
    return validationError(data.error);
  }

  const {email,firstName,lastName,password,phone,notes} = data.data;

  const exist = await prisma.customer?.findFirst({where: {email}});
  if (exist) {
    return validationError({
      fieldErrors: {
        email: 'Customer already exists'
      }
    });
  }

  const newCustomer = await prisma.customer.create({
    data: {
      email,
      password: await hashPassword(password),
      fullName: joinFirstName(firstName, lastName),
      phone,
      notes
    }
  });

  return redirect(`${EAdminNavigation.customers}/${newUser.id}`);
}

