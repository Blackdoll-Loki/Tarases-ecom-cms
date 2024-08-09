import { Box, FormLayout, Layout, TextField } from "@shopify/polaris";
import { FC } from "react";
import { TCustomerDto } from "~/.server/admin/dto/customer.dto";
import { ValidatedTextField } from "~/admin/ui/ValidatedTextField/ValidatedTextField";

export type CustomersOverviewFormProps = {
  customer: TCustomerDto;
};

export const CustomersOverviewForm: FC<CustomersOverviewFormProps> = (props) => {
  const {customer: {firstName, lastName, email, phone}} = props;

  return (
    <Layout>
      <Layout.Section>
        <Box padding="400" shadow="300" background="bg-surface" borderRadius="400" borderColor="border">
          <Box>
            <h2 className="Polaris-Text--root Polaris-Text--headingMd">Customer overview</h2>
          </Box>
          <Box width="586px" borderColor="border">
            <FormLayout>
              <FormLayout.Group>
                <ValidatedTextField
                label="First Name"
                type="text"
                name="firstName"
                autoComplete="given-name"
                defaultValue={firstName}
              />
              <ValidatedTextField
                label="Last Name"
                type="text"
                name="lastName"
                autoComplete="last name"
                defaultValue={lastName}
              />
              </FormLayout.Group>
            </FormLayout>
            <FormLayout>
              <ValidatedTextField
                  label="Email"
                  type="text"
                  name="email"
                  autoComplete="Email"
                  defaultValue={email}
                />
            </FormLayout>
            <FormLayout>
              <ValidatedTextField
                    label="Phone"
                    type="text"
                    name="firstName"
                    autoComplete="Phone"
                    defaultValue={phone}
                  />
            </FormLayout>
          </Box>
        </Box>
      </Layout.Section>
    </Layout>
  );
};
