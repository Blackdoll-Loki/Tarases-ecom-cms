import { Box, FormLayout, Layout, TextField } from "@shopify/polaris";
import { FC, useState } from "react";
import { TCustomerDto } from "~/.server/admin/dto/customer.dto";

export type CustomersOverviewFormProps = {
  customer?: TCustomerDto;
};

export const CustomersOverviewForm: FC<CustomersOverviewFormProps> = ({ customer }) => {
  const [firstName, setFirstName] = useState(customer?.firstName || '');
  const [lastName, setLastName] = useState(customer?.lastName || '');
  const [email, setEmail] = useState(customer?.email || '');
  const [phone, setPhone] = useState(customer?.phone || '');

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
                <TextField
                  label="First Name"
                  type="text"
                  name="firstName"
                  autoComplete="off"
                  value={firstName}
                  onChange={(value) => setFirstName(value)}
                />
                <TextField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  autoComplete="off"
                  value={lastName}
                  onChange={(value) => setLastName(value)}
                />
              </FormLayout.Group>
            </FormLayout>
            <FormLayout>
              <TextField
                label="Email"
                type="text"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(value) => setEmail(value)}
              />
            </FormLayout>
            <FormLayout>
              <TextField
                label="Phone"
                type="text"
                name="phone"
                autoComplete="off"
                value={phone}
                onChange={(value) => setPhone(value)}
              />
            </FormLayout>
          </Box>
        </Box>
      </Layout.Section>
    </Layout>
  );
};
