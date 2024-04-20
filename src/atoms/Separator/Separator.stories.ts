import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta = {
    title: 'Atoms/Separator',
    component: Separator,
    tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    args: {
        type: 'horizontal',
    },
};

export const Vertical: Story = {
    args: {
        type: 'vertical',
    },
};
