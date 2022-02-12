import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoadingComponent } from '.';

export default {
  title: 'Components/Header',
  component: LoadingComponent
} as ComponentMeta<typeof LoadingComponent>

const Template: ComponentStory<typeof LoadingComponent> = () => <LoadingComponent />;

export const Default = Template.bind({});