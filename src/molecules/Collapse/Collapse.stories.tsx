import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from './Collapse';

const meta = {
    title: 'Molecules/Collapse',
    component: Collapse,
    tags: ['autodocs'],
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Open: Story = {
    args: {
        open: true,
    },
};

export const Closed: Story = {
    args: {
        open: false,
    },
};
