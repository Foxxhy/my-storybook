import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
    title: 'Atoms/Link',
    component: Link,
    tags: ['autodocs'],
} satisfies Meta<typeof Link>;

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
        target: 'self',
        children: 'my link',
    },
};
