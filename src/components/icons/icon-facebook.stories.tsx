import { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconFacebook } from './icon-facebook';

// eslint-disable-next-line import/exports-last
export default {
  title: 'Atoms/icon',
  component: IconFacebook,
  argTypes: {},
} as Meta;

const Template: Story = () => <IconFacebook />;
// eslint-disable-next-line import/exports-last
export const Facebook = Template.bind({});
Facebook.args = {
  primary: true,
  label: 'IconFacebook',
};
