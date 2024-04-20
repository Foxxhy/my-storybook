import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
    title: 'Atoms/Link',
    component: Link,
    tags: ['autodocs'],
    // argTypes: {
    //     font: undefined,
    //     size: undefined,
    //     weight: undefined,
    //     color: undefined,
    //     style: undefined,
    //     transform: undefined,
    //     cursor: undefined,
    // },

} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
    args: {
        font: undefined,
        size: undefined,
        weight: undefined,
        color: undefined,
        style: undefined,
        transform: undefined,
        cursor: undefined,
        children: 'my mink',
    },
};
