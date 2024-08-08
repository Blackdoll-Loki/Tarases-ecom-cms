import { Box, FormLayout, Layout, TextField } from "@shopify/polaris";

export const CustomersOverviewForm = () => {
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
                type="email"
                label="Email"
                onChange={() => {}}
                autoComplete="email"
              />
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
};
