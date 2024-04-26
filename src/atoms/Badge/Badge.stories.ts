import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    args: {
        type: 'success',
        outline: false,
        weight: undefined,
        full: false,
        children: 'My Button'
    },

} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'success',
        weight: undefined,
        outline: false,
        full: false,
        children: 'Lorem Ipsum Factum'
    },
};

export const Outline: Story = {
    args: {
        type: 'success',
        weight: undefined,
        outline: true,
        full: false,
        children: 'Lorem Ipsum Factum'
    },
};
