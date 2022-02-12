import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LogoComponent } from '.';

export default {
  title: 'Components/Logo',
  component: LogoComponent
} as ComponentMeta<typeof LogoComponent>

const Template: ComponentStory<typeof LogoComponent> = () => <LogoComponent />;

export const Default = Template.bind({});