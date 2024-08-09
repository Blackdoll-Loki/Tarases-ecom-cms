import { Button, Page } from "@shopify/polaris";

export default function categoriesPage(){
  return(
    <Page
    backAction={{content: 'Settings', url: '#'}}
    title="Categories"
    primaryAction={<Button variant="primary">Create Category</Button>}
  >
  </Page>
  )
}
