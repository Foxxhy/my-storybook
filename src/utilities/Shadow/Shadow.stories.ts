import type { Meta, StoryObj } from '@storybook/react';
import { Shadow } from './Shadow';

const meta = {
    title: 'Utilities/Shadow',
    component: Shadow,
    tags: ['autodocs'],
} satisfies Meta<typeof Shadow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
    args: {
        shadow: 'unset',
    },
};
