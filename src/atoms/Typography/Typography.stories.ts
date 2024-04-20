import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    type: ['text', 'label'],
  },

} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'text',
    weight: undefined,
    style: undefined,
    transform: undefined,
    children: 'Lorem ipsum factum'
  },
};

export const Secondary: Story = {
  args: {
    type: 'label',
    weight: undefined,
    style: undefined,
    transform: undefined,
    children: 'Lorem ipsum factum'
  },
};
