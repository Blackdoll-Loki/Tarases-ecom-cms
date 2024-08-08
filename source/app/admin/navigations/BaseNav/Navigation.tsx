import { Fragment } from "react";
import { EAdminNavigation } from "~/admin/constants/navigation.constant";
import Section from "./Section";

export type TLinkItem = {
  url: string;
  label: string;
  icon?: string[];
  subItems?: TLinkItem[];
};


export default function Navigation() {
  const items: TLinkItem[] = [
    {
      url: EAdminNavigation.dashboard,
      label: 'Home',
      icon: ['M8.344 3.692a2.25 2.25 0 0 1 3.312 0l3.854 4.19a3.75 3.75 0 0 1 .99 2.538v3.33a2.75 2.75 0 0 1-2.75 2.75h-1.75a1.5 1.5 0 0 1-1.5-1.5v-2h-1v2a1.5 1.5 0 0 1-1.5 1.5h-1.75a2.75 2.75 0 0 1-2.75-2.75v-3.33c0-.94.353-1.847.99-2.539l3.854-4.189Zm2.208 1.016a.75.75 0 0 0-1.104 0l-3.854 4.189a2.25 2.25 0 0 0-.594 1.523v3.33c0 .69.56 1.25 1.25 1.25h1.75v-2a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v2h1.75c.69 0 1.25-.56 1.25-1.25v-3.33a2.25 2.25 0 0 0-.594-1.523l-3.854-4.19Z']
    },
    {
      url: EAdminNavigation.users,
      label: 'Users',
      icon: [`M10.965 11.238a.986.986 0 0 1 .035.262v.5a1 1 0 1 1-2 0v-.5c0-.09.012-.178.035-.262a12.75 12.75 0 0 1-3.278-.69l-.257-.09a.75.75 0 1 1 .5-1.415l.256.09a11.25 11.25 0 0 0 7.488 0l.256-.09a.75.75 0 1 1 .5 1.414l-.257.09a12.75 12.75 0 0 1-3.278.69Z`, `M6.5 5.5v-.25a2.25 2.25 0 0 1 2.25-2.25h2.5a2.25 2.25 0 0 1 2.25 2.25v.25h.25a3.25 3.25 0 0 1 3.25 3.25v5a3.25 3.25 0 0 1-3.25 3.25h-7.5a3.25 3.25 0 0 1-3.25-3.25v-5a3.25 3.25 0 0 1 3.25-3.25h.25Zm1.5-.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v.25h-4v-.25Zm-1.75 1.75a1.75 1.75 0 0 0-1.75 1.75v5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-5a1.75 1.75 0 0 0-1.75-1.75h-7.5Z`]
    },
    {
      url: EAdminNavigation.customers,
      label: 'Customers',
      icon: [`M10 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z`, `M15.484 14.227a6.274 6.274 0 0 0-10.968 0l-.437.786a1.338 1.338 0 0 0 1.17 1.987h9.502a1.338 1.338 0 0 0 1.17-1.987l-.437-.786Zm-9.657.728a4.773 4.773 0 0 1 8.346 0l.302.545h-8.95l.302-.545Z`]
    },
    {
      url: EAdminNavigation.products,
      label: 'Products',
      icon: [`M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`, `M11.276 3.5a3.75 3.75 0 0 0-2.701 1.149l-4.254 4.417a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341v-2.187a3.25 3.25 0 0 0-3.25-3.25h-1.974Zm-1.62 2.19a2.25 2.25 0 0 1 1.62-.69h1.974c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26l-4.747 4.572a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.016-1.75l4.253-4.418Z`],
      subItems: [
        {
          url: EAdminNavigation.categories,
          label: 'Categories',
        },
      ],
    },
    {
      url: EAdminNavigation.orders,
      label: 'Orders',
      icon: [`M6.976 3.5a2.75 2.75 0 0 0-2.72 2.347l-.662 4.46a8.75 8.75 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66c0-.43-.032-.858-.095-1.283l-.66-4.46a2.75 2.75 0 0 0-2.72-2.347h-6.05Zm-1.237 2.567a1.25 1.25 0 0 1 1.237-1.067h6.048c.62 0 1.146.454 1.237 1.067l.583 3.933h-2.484a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171h-1.558a.25.25 0 0 1-.237-.17l-.159-.475a1.25 1.25 0 0 0-1.185-.855h-2.484l.583-3.933Zm-.738 5.433-.001.09v1.66c0 .966.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75v-1.75h-2.46l-.1.303a1.75 1.75 0 0 1-1.66 1.197h-1.56a1.75 1.75 0 0 1-1.66-1.197l-.1-.303h-2.46Z`],
      subItems: [
        {
          url: EAdminNavigation.carts,
          label: 'Carts',
        },
      ],
    },
  ];
  return (
    <Fragment>
      <nav className="Polaris-Navigation">
        <div className="Polaris-Navigation__PrimaryNavigation Polaris-Scrollable Polaris-Scrollable--vertical Polaris-Scrollable--horizontal Polaris-Scrollable--scrollbarWidthThin" data-polaris-scrollable="true">
          <Section items={items} />
        </div>
      </nav>
    </Fragment>
  );
}
