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
 * - Typography
 * @param props: ITypography
 * @returns - JSX
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
