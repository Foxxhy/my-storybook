import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    args: {
        type: 'success',
        weight: undefined,
        full: false,
        children: 'My Button'
    },

} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        type: 'success',
        weight: undefined,
        full: false,
        children: 'Lorem Ipsum Factum'
    },
};

export const Info: Story = {
    args: {
        type: 'info',
        weight: undefined,
        full: false,
        children: 'Lorem Ipsum Factum'
    },
};

export const Warning: Story = {
    args: {
        type: 'warning',
        weight: undefined,
        full: false,
        children: 'Lorem Ipsum Factum'
    },
};

export const Danger: Story = {
    args: {
        type: 'danger',
        weight: undefined,
        full: false,
        children: 'Lorem Ipsum Factum'
    },
};

export const Primary: Story = {
    args: {
        type: 'primary',
        weight: undefined,
        full: false,
        children: 'Lorem Ipsum Factum'
    },
};

export const Secondary: Story = {
    args: {
        type: 'secondary',
        weight: undefined,
        full: false,
        children: 'Lorem Ipsum Factum'
    },
};

export const Dark: Story = {
    args: {
        type: 'dark',
        weight: undefined,
        full: false,
        children: 'Lorem Ipsum Factum'
    },
};

