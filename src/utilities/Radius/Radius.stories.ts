import type { Meta, StoryObj } from '@storybook/react';
import { Radius } from './Radius';

const meta = {
    title: 'Utilities/Radius',
    component: Radius,
    tags: ['autodocs'],
} satisfies Meta<typeof Radius>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
    args: {
        circle: false,
        size: 10
    },
};

export const Circle: Story = {
    args: {
        circle: true,
        size: 0
    },
};
