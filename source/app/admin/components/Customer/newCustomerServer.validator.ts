import {z} from 'zod';
import {emailRule, firstNameRule, lastNameRule} from '~/admin/components/UsersNewForm/UsersNewForm.validator';
export const phoneRule = z.string().trim().min(12, {message: 'Phone must be greater than 12'});
export const notesRule = z.string().trim().min(20, {message: 'Phone must be greater than 20'});


export const newCustomerFormValidator = z.object({
  email: emailRule,
  firstName: firstNameRule,
  lastName: lastNameRule,
  phone: phoneRule,
  notes: notesRule,
});

