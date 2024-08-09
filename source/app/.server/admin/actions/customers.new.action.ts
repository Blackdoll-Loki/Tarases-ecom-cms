import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import { prisma } from "~/.server/shared/utils/prisma.util";
import { CustomerNewFormValidator } from "~/admin/components/Customer/CustomerNewForm.validator";
import { EAdminNavigation } from "~/admin/constants/navigation.constant";
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

  const {email,firstName,lastName,phone,notes} = data.data;

  const exist = await prisma.customer?.findFirst({where: {email}});
  if (exist) {
    return validationError({
      fieldErrors: {
        email: 'Customer already exists'
      }
    });
  }


  try {
    const newCustomer = await prisma.customer.create({
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        notes: notes
      }
    });
    return redirect(`${EAdminNavigation.customers}/${newCustomer.id}`);
  } catch (error) {
    return json({ error: 'Ошибка создания клиента' }, { status: 500 });
  }
}

