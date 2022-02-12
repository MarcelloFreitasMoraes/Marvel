import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderComponent } from '.';

export default {
  title: 'Components/Header',
  component: HeaderComponent
} as ComponentMeta<typeof HeaderComponent>

const Template: ComponentStory<typeof HeaderComponent> = () => <HeaderComponent />;

export const Default = Template.bind({});