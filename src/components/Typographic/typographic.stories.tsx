import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TypographicComponent } from '.';

export default {
  title: 'Components/Typographic',
  component: TypographicComponent
} as ComponentMeta<typeof TypographicComponent>

const Template: ComponentStory<typeof TypographicComponent> = (args) => <TypographicComponent {...args} />;

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Regular = Template.bind({});
export const Small = Template.bind({});
export const Description = Template.bind({});

Large.args = {
  primary: true,
  title: 'Large',
  large: true
};

Medium.args = {
  primary: false,
  title: 'Medium',
  medium: true
};

Regular.args = {
  primary: false,
  title: 'Regular',
  regular: true
};

Small.args = {
  primary: false,
  title: 'Small',
  small: true
};

Description.args = {
  primary: false,
  title: 'Description',
  small: true
};