import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta = {
  title: 'Atoms/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    type: ['text', 'label'],
  },

} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleMain: Story = {
  args: {
    type: 'title-main',
    style: undefined,
    transform: undefined,
    children: 'Lorem ipsum factum'
  },
};

export const TitleSection: Story = {
  args: {
    type: 'title-section',
    style: undefined,
    transform: undefined,
    children: 'Lorem ipsum factum'
  },
};

export const TitleSub: Story = {
    args: {
      type: 'title-sub ',
      style: undefined,
      transform: undefined,
      children: 'Lorem ipsum factum'
    },
  };

  
  export const SubtitleMain: Story = {
    args: {
      type: 'subtitle-main',
      style: undefined,
      transform: undefined,
      children: 'Lorem ipsum factum'
    },
  };

  
  export const SubtitleSection: Story = {
    args: {
      type: 'subtitle-section',
      style: undefined,
      transform: undefined,
      children: 'Lorem ipsum factum'
    },
  };

  
  export const SubtitleSub: Story = {
    args: {
      type: 'subtitle-section',
      style: undefined,
      transform: undefined,
      children: 'Lorem ipsum factum'
    },
  };
  