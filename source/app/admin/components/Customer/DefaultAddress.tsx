import { Box, FormLayout, Layout, Select, TextField } from "@shopify/polaris";
import { useCallback, useState } from "react";

export const CustomersDefaultAddressForm = () => {
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
                  <TextField
                    label="First name"
                    onChange={() => {}}
                    autoComplete="off"
                  />
                  <TextField
                    label="Last name"
                    onChange={() => {}}
                    autoComplete="off"
                  />
                </FormLayout.Group>
            </FormLayout>
            <FormLayout>
              <TextField
                label="Phone number"
                onChange={() => {}}
                autoComplete="off"
              />
            </FormLayout>
          </Box>
        </Box>
      </Layout.Section>
    </Layout>
  );
}
