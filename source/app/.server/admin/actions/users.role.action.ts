import {ActionFunctionArgs, redirect} from '@remix-run/node';
import {authenticator} from '~/.server/admin/services/auth.service';
import {EAdminNavigation} from '~/admin/constants/navigation.constant';
import {validationError} from 'remix-validated-form';
import {prisma} from '~/.server/shared/utils/prisma.util';
import {usersRoleFormValidator} from '~/admin/components/UsersSingle/UsersRoleForm.validator';
import {$Enums} from '@prisma/client';
import { userRoleValidator } from '~/admin/components/UsersSingle/DeleteModal.validator';

async function changeRoleAction(formData: FormData, id: string) {
 // validate form data
  const data = await usersRoleFormValidator.validate(
    formData
  );

  if (data.error) {
    return validationError(data.error);
  }

  const {role} = data.data;

  // update user
  await prisma.user.update({
    where: {id: user.id},
    data: {
      role: role as $Enums.AdminRole
    }
  });

  // redirect to user page
  return redirect(`${EAdminNavigation.users}/${user.id}`);
}


async function deleteUserAction(formData: FormData, id: number) {
  try {
    const userWrights = await userRoleValidator.validate(formData);
    if (userWrights.error) {
      return validationError(userWrights.error);
    }
    /*if (user.role !== $Enums.AdminRole.ADMIN) {
      return validationError({ error: 'You do not have permission to delete users.' });
    }*/

    await prisma.user.update({
      where: { id: Number(id) },
      data: {
        deletedAt: new Date()
      }
    });

    return redirect(EAdminNavigation.users);
  } catch (error) {
    console.error("Failed to delete user:", error);
    return validationError(error);
  }
}

export async function adminUsersActions({request, params}: ActionFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: EAdminNavigation.authLogin,
  });

  const {id} = params;
  if (!id) {
    return redirect(EAdminNavigation.users);
  }
    // get user
  const user = await prisma.user.findUnique({
    where: { id: Number(id) }
  });

    // if not exist
  if (!user) {
    return redirect(EAdminNavigation.users);
  }

  const formData = await request.formData();
  const actionType = formData.get('actionType');


  if (actionType === 'delete') {
    return deleteUserAction(formData, id)
  } else {
    return changeRoleAction(formData, id)
  }
}
