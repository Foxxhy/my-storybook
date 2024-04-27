import type { Meta, StoryObj } from '@storybook/react';
import { Padding } from './Padding';

const meta = {
    title: 'Utilities/Padding',
    component: Padding,
    tags: ['autodocs'],

} satisfies Meta<typeof Padding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unset: Story = {
    args: {
        direction: 'unset',
        size: 16,
    },
};

export const Top: Story = {
    args: {
        direction: 'top',
        size: 16,
    },
};

export const Left: Story = {
    args: {
        direction: 'left',
        size: 16,
    },
};

export const Right: Story = {
    args: {
        direction: 'right',
        size: 16,
    },
};

export const Bottom: Story = {
    args: {
        direction: 'bottom',
        size: 16,
    },
};
