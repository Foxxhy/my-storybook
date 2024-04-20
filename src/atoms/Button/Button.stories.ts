import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        type: 'success',
        weight: undefined,
        outline: false,
        full: false,
        children: 'My Button'
    },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'success',
        weight: undefined,
        outline: false,
        full: false,
        focus: false,
        hover: false,
        children: 'My Button'
    },
};

export const Outline: Story = {
    args: {
        type: 'success',
        weight: undefined,
        outline: true,
        full: false,
        focus: false,
        hover: false,
        children: 'My Button'
    },
};
