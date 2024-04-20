import type { Meta, StoryObj } from '@storybook/react';
import { Elevation } from './Elevation';

const meta = {
    title: 'Utilities/Elevation',
    component: Elevation,
    tags: ['autodocs'],
    args: {
        type: 'default',
    },

} satisfies Meta<typeof Elevation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
    args: {
        type: 'default',
    },
};
