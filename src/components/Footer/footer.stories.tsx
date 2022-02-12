import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FooterComponent } from '.';

export default {
  title: 'Components/Footer',
  component: FooterComponent
} as ComponentMeta<typeof FooterComponent>

const Template: ComponentStory<typeof FooterComponent> = () => <FooterComponent />;

export const Default = Template.bind({});