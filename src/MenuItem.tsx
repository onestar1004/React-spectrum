import React, { useEffect, useRef } from 'react';

namespace Spectrum {
  export interface MenuItemEvent extends globalThis.Event {
    readonly target: (EventTarget & { selected: boolean }) | null;
  }
}

type Props = {
  children?: React.ReactNode;
  onClick?: (e: Spectrum.MenuItemEvent) => void;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-menu-item': {
        children?: React.ReactNode;
        ref?: React.RefObject<HTMLElement>;
        class?: string;
        disabled?: boolean;
        selected?: boolean;
      };
    }
  }
}

export default function MenuItem(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const dispatchClick = (e: Event) =>
    props.onClick?.(e as Spectrum.MenuItemEvent);

  useEffect(() => {
    ref.current?.addEventListener('click', dispatchClick);
    return () => {
      ref.current?.removeEventListener('click', dispatchClick);
    };
  }, []);

  return (
    <sp-menu-item
      ref={ref}
      class={props.className}
      disabled={props.disabled || undefined}
      selected={props.selected || undefined}
    >
      {props.children}
    </sp-menu-item>
  );
}
