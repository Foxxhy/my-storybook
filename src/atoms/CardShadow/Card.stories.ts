import type { Meta, StoryObj } from '@storybook/react';
import { CardShadow } from './CardShadow';

const meta = {
    title: 'Atoms/CardShadow',
    component: CardShadow,
    tags: ['autodocs'],
} satisfies Meta<typeof CardShadow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        type: 's',
        children: 'Lorem Ipsum Factum'
    },
};

export const Medoiù: Story = {
    args: {
        type: 'm',
        children: 'Lorem Ipsum Factum'
    },
};

export const Large: Story = {
    args: {
        type: 'l',
        children: 'Lorem Ipsum Factum'
    },
};
