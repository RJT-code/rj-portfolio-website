"use client";

import { type AnchorHTMLAttributes, type MouseEvent } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: `#${string}`;
};

export function SectionLink({ href, onClick, ...props }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView();
    window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}`);
  }

  return <a {...props} href={href} onClick={handleClick} />;
}