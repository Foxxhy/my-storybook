import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
    title: 'Atoms/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'default',
        color: 'dark',
        radius: '8',
        shadow: undefined,
        children: 'Lorem Ipsum Factum ...'
    },
};

export const Dot: Story = {
    args: {
        type: 'dot',
        color: 'dark',
        radius: '8',
        shadow: undefined,
        children: 'Lorem Ipsum Factum ...'
    },
};

export const Shadow: Story = {
    args: {
        type: 'shadow',
        color: 'dark',
        radius: '8',
        shadow: undefined,
        children: 'Lorem Ipsum Factum ...'
    },
};
