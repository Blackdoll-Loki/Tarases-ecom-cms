import { Fragment } from "react";
import { NavLink } from "@remix-run/react";
import { TLinkItem } from "./Navigation";
import Section from "./Section";

export default function Item(props: TLinkItem ){

  return (
    <Fragment>
      <li className="Polaris-Navigation__ListItem">
        <div className="Polaris-Navigation__ItemWrapper">
          <div className="Polaris-Navigation__ItemInnerWrapper Polaris-Navigation__ItemInnerWrapper--selected">
            <NavLink
              className="Polaris-Navigation__Item Polaris-Navigation__Item--selected Polaris-Navigation--subNavigationActive"
              to={props.url}
              data-polaris-unstyled="true"
              aria-expanded="false"
            >
              <div className="Polaris-Navigation__Icon">
                <span className="Polaris-Icon">
                  <svg
                    viewBox="0 0 20 20"
                    className="Polaris-Icon__Svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    { props.icon?.map((path, index) => (
                        <path fill-rule="evenodd" key={index} d={path} />
                    ))}
                  </svg>
                </span>
              </div>
              <span className="Polaris-Navigation__Text">
                <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
                  {props.label}
                </span>
              </span>
            </NavLink>
          </div>
        </div>
        {props.subItems && (
          <div className="Polaris-Navigation__SecondaryNavigation Polaris-Navigation__SecondaryNavigationOpen">
            <div
              style={{ maxHeight: '0px', overflow: 'hidden' }}
              className="Polaris-Collapsible Polaris-Collapsible--isFullyClosed"
              aria-hidden="true"
            >
              <Section items={props.subItems}></Section>
            </div>
          </div>
        )}
      </li>
    </Fragment>
  );
}
