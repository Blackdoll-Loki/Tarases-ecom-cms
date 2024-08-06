import React, { useMemo } from 'react';
import { NavLink } from '@remix-run/react';
import { Scrollable,
  WithinContentContext,
  Image,
  classNames,
  getWidth,
  useFrame,
  useBreakpoints,
  NavigationContext,
  Section,
  Item
} from '@shopify/polaris';
import styles from './Navigation.module.css';

export interface NavigationProps {
  location: string;
  children?: React.ReactNode;
  contextControl?: React.ReactNode;
  onDismiss?(): void;
  /** id of the element used as aria-labelledby */
  ariaLabelledBy?: string;
  /** Accepts a component that is used to supplement the logo markup */
  logoSuffix?: React.ReactNode;
}

export const Navigation: React.FunctionComponent<NavigationProps> & {
  Item: typeof Item;
  Section: typeof Section;
} = function Navigation({
  children,
  contextControl,
  location,
  onDismiss,
  ariaLabelledBy,
  logoSuffix,
}: NavigationProps) {
  const { logo } = useFrame();
  const width = getWidth(logo, 104);
  const { mdUp } = useBreakpoints();

  const logoMarkup = logo ? (
    <div
      className={classNames(
        styles.LogoContainer,
        logoSuffix && styles.hasLogoSuffix,
      )}
    >
      <NavLink // Use NavLink from @remix-run/react
        to={logo.url || ''}
        className={styles.LogoLink}
        style={{ width }}
      >
        <Image
          source={logo.topBarSource || ''}
          alt={logo.accessibilityLabel || ''}
          className={styles.Logo}
          style={{ width }}
        />
      </NavLink>
      {logoSuffix}
    </div>
  ) : null;

  const mediaMarkup = contextControl ? (
    <div className={styles.ContextControl}>{contextControl}</div>
  ) : (
    logoMarkup
  );

  const context = useMemo(
    () => ({ location, onNavigationDismiss: onDismiss }),
    [location, onDismiss],
  );

  return (
    <NavigationContext.Provider value={context}>
      <WithinContentContext.Provider value>
        <nav className={styles.Navigation} aria-labelledby={ariaLabelledBy}>
          {mdUp ? mediaMarkup : null}
          <Scrollable className={styles.PrimaryNavigation}>
            {children}
          </Scrollable>
        </nav>
      </WithinContentContext.Provider>
    </NavigationContext.Provider>
  );
};

Navigation.Item = Item;
Navigation.Section = Section;


/*import {Navigation} from '@shopify/polaris';
import {HomeIcon, OrderIcon, PersonIcon, ProductIcon, WorkIcon} from '@shopify/polaris-icons';
import {EAdminNavigation} from '~/admin/constants/navigation.constant';
import {useLocation} from 'react-router';

export const BaseNav = () => {
  const location = useLocation();

  return (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            url: EAdminNavigation.dashboard,
            label: 'Home',
            icon: HomeIcon,
            matchPaths: [EAdminNavigation.dashboard]
          },
          {
            url: EAdminNavigation.users,
            label: 'Users',
            icon: WorkIcon,
            matchPaths: [EAdminNavigation.users]
          },
          {
            url: EAdminNavigation.customers,
            label: 'Customers',
            icon: PersonIcon,
          },
          {
            url: EAdminNavigation.products,
            label: 'Products',
            icon: ProductIcon,
            subNavigationItems: [
              {
                url: EAdminNavigation.categories,
                disabled: false,
                label: 'Categories',
              },
            ],
          },
          {
            url: EAdminNavigation.orders,
            label: 'Orders',
            icon: OrderIcon,
            subNavigationItems: [
              {
                url: EAdminNavigation.carts,
                disabled: false,
                label: 'Carts',
              },
            ],
          },
        ]}
      />
    </Navigation>
  );
};*/
