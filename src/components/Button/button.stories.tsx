import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonComponent } from '.';

export default {
  title: 'Components/Button',
  component: ButtonComponent
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
export const Default = Template.bind({});

Primary.args = {
  primary: true,
  title: 'Primary',
  onClick: () => { },
  type: 'button'
};

Default.args = {
  primary: false,
  title: 'Default',
  onClick: () => { },
  type: 'button'
};