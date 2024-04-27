import type { Meta, StoryObj } from '@storybook/react';
import { IconWrapper } from './Icon';

const meta = {
    title: 'Molecules/Icon',
    component: IconWrapper,
    tags: ['autodocs'],
    args: {
    },

} satisfies Meta<typeof IconWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
    args: {
        name: 'anchor'
    },
};
