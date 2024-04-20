import type { Meta, StoryObj } from '@storybook/react';
import { Dimension } from './Dimension';

const meta = {
    title: 'Utilities/Dimension',
    component: Dimension,
    tags: ['autodocs'],
    args: {
        width: 30,
        height: 30,
        fullHeight: false,
        fullWidth: false,
    },

} satisfies Meta<typeof Dimension>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 30,
        height: 30,
        fullHeight: false,
        fullWidth: false,
    },
};

export const FullWidth: Story = {
    args: {
        width: 30,
        height: 30,
        fullHeight: false,
        fullWidth: true,
    },
};

export const FullHeight: Story = {
    args: {
        width: 30,
        height: 30,
        fullHeight: true,
        fullWidth: false,
    },
};