import type { Meta, StoryObj } from '@storybook/react';
import { Background } from './Background';

const meta = {
    title: 'Utilities/Background',
    component: Background,
    tags: ['autodocs'],
    args: {
        type: 'success',
    },

} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
    args: {
        type: 'success',
    },
};
