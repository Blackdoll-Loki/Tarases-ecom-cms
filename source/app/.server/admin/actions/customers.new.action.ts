import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import { prisma } from "~/.server/shared/utils/prisma.util";
import { newCustomerFormValidator } from "~/admin/components/Customer/newCustomerServer.validator";
import { EAdminNavigation } from "~/admin/constants/navigation.constant";
import { authenticator } from "../services/auth.service";

export async function adminCustomersNewAction({ request }: ActionFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: EAdminNavigation.authLogin,
  });

  const formData = await request.formData();

  const parsedData = Object.fromEntries(formData.entries());

  try {
    const data = newCustomerFormValidator.parse(parsedData);

    const { email, firstName, lastName, phone, notes } = data;

    const exist = await prisma.customer?.findFirst({ where: { email } });
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
        firstName,
        lastName,
        phone,
        notes
      }
    });

    return redirect(`${EAdminNavigation.customers}/${newCustomer.id}`);
  } catch (error) {
    return json({ error: 'Ошибка создания клиента' }, { status: 500 });
  }
}


