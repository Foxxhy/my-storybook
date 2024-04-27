import type { Meta, StoryObj } from '@storybook/react';
import { Cover } from './Cover';

const meta = {
    title: 'Molecules/Cover',
    component: Cover,
    tags: ['autodocs'],
} satisfies Meta<typeof Cover>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Shadow: Story = {
    args: {
        type: 'shadow',
    },
};

export const Vague: Story = {
    args: {
        type: 'vague',
    },
};
