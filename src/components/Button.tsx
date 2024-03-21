import { type ComponentPropsWithoutRef } from "react";

type PropsButton = ComponentPropsWithoutRef<"button"> & { href?: never };
type PropsLink = ComponentPropsWithoutRef<"a"> & { href?: string };

type Props = PropsButton | PropsLink;

function isLink(props: Props): props is PropsLink {
  return "href" in props;
}

export default function Button(props: Props) {
  if (isLink(props)) {
    return <a {...props} onClick={() => console.log("click a")} />;
  }

  return <button {...props} onClick={() => console.log("click button")} />;
}
