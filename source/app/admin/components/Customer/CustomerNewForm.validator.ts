import { z } from 'zod';
import { withZod } from '@rvf/zod';

export const CustomerNewFormValidator = withZod(
  z.object({})
);
