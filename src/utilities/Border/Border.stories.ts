import type { Meta, StoryObj } from '@storybook/react';
import { Color as Border } from './Border';

const meta = {
    title: 'Utilities/Border',
    component: Border,
    tags: ['autodocs'],
    args: {
        type: 'dark',
        direction: 'unset',
        children: 'Lorem Ipsum Factum'
    },

} satisfies Meta<typeof Border>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unset: Story = {
    args: {
        type: 'dark',
        direction: 'unset',
        children: 'Lorem Ipsum Factum'
    },
};

export const Top: Story = {
    args: {
        type: 'dark',
        direction: 'top',
        children: 'Lorem Ipsum Factum'
    },
};

export const Left: Story = {
    args: {
        type: 'dark',
        direction: 'left',
        children: 'Lorem Ipsum Factum'
    },
};

export const Right: Story = {
    args: {
        type: 'dark',
        direction: 'right',
        children: 'Lorem Ipsum Factum'
    },
};

export const Bottom: Story = {
    args: {
        type: 'dark',
        direction: 'bottom',
        children: 'Lorem Ipsum Factum'
    },
};
