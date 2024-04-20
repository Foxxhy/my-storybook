import type { Meta, StoryObj } from '@storybook/react';
import { Display } from './Display';

const meta = {
    title: 'Utilities/Display',
    component: Display,
    tags: ['autodocs'],
    args: {
        type: 'block',
    },

} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flex: Story = {
    args: {
        type: 'flex',
        wrap: undefined,
        direction: undefined,
        align: undefined,
        justify: undefined,
        gap: undefined
    },
};

export const Block: Story = {
    args: {
        type: 'block',
        wrap: undefined,
        direction: undefined,
        align: undefined,
        justify: undefined,
        gap: undefined
    },
};

export const Inline: Story = {
    args: {
        type: 'inline',
        wrap: undefined,
        direction: undefined,
        align: undefined,
        justify: undefined,
        gap: undefined
    },
};

export const InlineBlock: Story = {
    args: {
        type: 'inline-block',
        wrap: undefined,
        direction: undefined,
        align: undefined,
        justify: undefined,
        gap: undefined
    },
};
