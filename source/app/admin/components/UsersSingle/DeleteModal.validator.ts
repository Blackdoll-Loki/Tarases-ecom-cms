import { withZod } from '@rvf/zod';
import { z } from 'zod';
import { $Enums } from '@prisma/client';

export const userRoleValidator = withZod(
  z.object({
    role: z.enum([$Enums.AdminRole.ADMIN])
  })
);
