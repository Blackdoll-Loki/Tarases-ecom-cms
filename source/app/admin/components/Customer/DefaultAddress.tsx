import { Box, FormLayout, Layout, Select, TextField } from "@shopify/polaris";
import { FC, useCallback, useState } from "react";
import { ValidatedTextField } from "~/admin/ui/ValidatedTextField/ValidatedTextField";
import { CustomersOverviewFormProps } from "./CustomersOverviewForm";

export const CustomersDefaultAddressForm: FC<CustomersOverviewFormProps> = ({ customer }) => {
  const [selected, setSelected] = useState('Ukraine');

  const handleSelectChange = useCallback(
    (value: string) => setSelected(value),
    [],
  );

  const options = [
    {label: 'Ukraine', value: 'Ukraine'},
    {label: 'USA', value: 'USA'},
    {label: 'Britain', value: 'Britain'},
  ];
  return (
    <Layout>
      <Layout.Section>
        <Box padding="400" shadow="300" background="bg-surface" borderRadius="400" borderColor="border">
          <Box>
            <h2 className="Polaris-Text--root Polaris-Text--headingMd">Default Address</h2>
            <span className="Polaris-Text--root Polaris-Text--subdued">The primary address of this customer</span>
          </Box>
          <Box width="586px" borderColor="border">
            <FormLayout>
              <Select
                label="Country/region"
                options={options}
                onChange={handleSelectChange}
                value={selected}
              />
            </FormLayout>
            <FormLayout>
              <FormLayout.Group>
              <ValidatedTextField
                label="First Name"
                type="text"
                name="firstName"
                autoComplete="given-name"
                defaultValue={customer?.firstName || ''}
              />
              <ValidatedTextField
                label="Last Name"
                type="text"
                name="lastName"
                autoComplete="last name"
                defaultValue={customer?.lastName || ''}
              />
              </FormLayout.Group>
            </FormLayout>
            <FormLayout>
            <ValidatedTextField
                label="Phone number"
                type="text"
                name="phone"
                autoComplete="phone"
                defaultValue={customer?.phone || ''}
              />
            </FormLayout>
          </Box>
        </Box>
      </Layout.Section>
    </Layout>
  );
}
