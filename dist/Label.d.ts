import React from 'react';
declare namespace Spectrum {
    type LabelSlot = 'label';
}
declare type Props = {
    children?: React.ReactNode;
    className?: string;
    slot?: Spectrum.LabelSlot;
    isRequired?: boolean;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-label': {
                children?: React.ReactNode;
                class?: string;
                slot?: Spectrum.LabelSlot;
                isrequired?: boolean;
            };
        }
    }
}
/**
 * Renders a text label. Can also be used to add a label to many Spectrum UXP
 * UI elements when using the `slot="label"` attribute.
 *
 * @example
 * ```jsx
 * <Spectrum.Textfield>
 *   <Spectrum.Label slot="label" isRequired>Required label in a slot</Spectrum.Label>
 * </Spectrum.Textfield>
 * ```
 */
export default function Label(props: Props): JSX.Element;
export {};
