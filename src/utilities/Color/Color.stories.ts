import type { Meta, StoryObj } from '@storybook/react';
import { Color } from './Colors';

const meta = {
    title: 'Utilities/Color',
    component: Color,
    tags: ['autodocs'],
    args: {
        type: 'success',
        children: 'Lorem Ipsum Factum'
    },

} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
    args: {
        type: 'info',
        children: 'Lorem Ipsum Factum'
    },
};
