import React from 'react';

import { HeaderText } from './HeaderText';

export default {
  title: 'Example/HeaderText',
  component: HeaderText,
};

const Template = (args) => <HeaderText {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    label: 'Header Text',
  };
  