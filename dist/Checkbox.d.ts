import React from 'react';
declare namespace Spectrum {
    interface CheckboxEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            checked: boolean;
        }) | null;
    }
}
declare type Props = {
    children?: React.ReactNode;
    onChange?: (e: Spectrum.CheckboxEvent) => void;
    onInput?: (e: Spectrum.CheckboxEvent) => void;
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    invalid?: boolean;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-checkbox': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                checked?: boolean;
                disabled?: boolean;
                indeterminate?: boolean;
                invalid?: boolean;
            };
        }
    }
}
export default function Checkbox(props: Props): JSX.Element;
export {};
