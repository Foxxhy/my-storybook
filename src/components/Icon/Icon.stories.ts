import type { Meta, StoryObj } from '@storybook/react';
import { IconWrapper } from './Icon';

const meta = {
    title: 'Components/Icon',
    component: IconWrapper,
    tags: ['autodocs'],
    args: {
    },

} satisfies Meta<typeof IconWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        name: 'anchor'
    },
};
