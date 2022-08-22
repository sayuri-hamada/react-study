import { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconTwitter } from './icon-twitter';

// eslint-disable-next-line import/exports-last
export default {
  title: 'Atoms/icon',
  component: IconTwitter,
  argTypes: {},
} as Meta;

const Template: Story = () => <IconTwitter />;
// eslint-disable-next-line import/exports-last
export const Twitter = Template.bind({});
Twitter.args = {
  primary: true,
  label: 'IconTwitter',
};
