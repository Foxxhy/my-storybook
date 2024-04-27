/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { createComponent } from '@lit/react';
import { FToggle } from 'foxxhy-my-design-system';

export const ToggleWrapped = createComponent({
    tagName: 'f-toggle',
    elementClass: FToggle,
    react: React,
});

interface IToggle {
    type?: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary'| 'dark',
    checked: boolean,
    disabled: boolean,
    change: unknown,
}


/**
 * ### Web component
 * - The Toggle component is used in forms.
 * The Toggle component accepts the following props:
 * 
 * 
 * - `type` : Specifies the checked color
 * - `checked` : Specifies the check state of Toggle
 * - `disaled` : Specifies if the Toggle is enable
 * - `change` : Specifies the function call with onChange
 */
export const Toggle = (props: IToggle) => {
    const { type, checked, disabled, change } = props;
    const ToggleProps = {
        theme: type,
        checked,
        disabled,
        change
    };

    return (
        <ToggleWrapped {...ToggleProps} />
    );
};
