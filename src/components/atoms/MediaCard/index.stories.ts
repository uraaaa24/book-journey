import type { Meta, StoryObj } from '@storybook/react';
import MediaCard from '.';

const meta = {
  title: 'Atoms/MediaCard',
  component: MediaCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MediaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "サンプルタイトル",
    text: "サンプルテキスト"
  }
};
