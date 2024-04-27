import type { Meta, StoryObj } from '@storybook/react';
import { Margin } from './Margin';

const meta = {
    title: 'Utilities/Margin',
    component: Margin,
    tags: ['autodocs'],

} satisfies Meta<typeof Margin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unset: Story = {
    args: {
        direction: 'unset',
        size: 16,
        children: 'Lorem Ipsum Factum'
    },
};

export const Top: Story = {
    args: {
        direction: 'top',
        size: 16,
        children: 'Lorem Ipsum Factum'
    },
};

export const Left: Story = {
    args: {
        direction: 'left',
        size: 16,
        children: 'Lorem Ipsum Factum'
    },
};

export const Right: Story = {
    args: {
        direction: 'right',
        size: 16,
        children: 'Lorem Ipsum Factum'
    },
};

export const Bottom: Story = {
    args: {
        direction: 'bottom',
        size: 16,
        children: 'Lorem Ipsum Factum'
    },
};
