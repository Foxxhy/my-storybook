import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
let checked = false;

const meta = {
    title: 'Molecules/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    args: {
        type: 'success',
        checked,
        disabled: false,
        change: () => {checked = !checked; alert('onChange')},
    },

} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Enable: Story = {
    args: {
        type: 'success',
        checked,
        disabled: false,
        change: () => {checked = !checked; alert('onChange')},
    },
};

export const Disable: Story = {
    args: {
        type: 'success',
        checked,
        disabled: true,
        change: () => {checked = !checked; alert('onChange')},
    },
};
