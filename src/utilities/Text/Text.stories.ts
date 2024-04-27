import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
    title: 'Utilities/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
    args: {
        font: 'primary',
        size: undefined,
        weight: undefined,
        color: 'info',
        style: 'underline',
        transform: undefined,
        cursor: undefined,
        align: 'unset',
        children: 'my link',
    },
};
