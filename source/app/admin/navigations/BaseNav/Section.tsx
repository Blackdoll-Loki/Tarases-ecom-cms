import { Fragment } from "react";
import Item from "./Item";
import { TLinkItem } from "./Navigation";


type NavigationProps = {
  items: TLinkItem[];
};

export default function Section(props: NavigationProps){
  return(
    <Fragment>
      <ul className="Polaris-Navigation__Section">
        {
        props.items.map((el: TLinkItem, idx: number) => (
          <Item key={idx} {...el} />
        ))}
      </ul>
    </Fragment>
  )
}
