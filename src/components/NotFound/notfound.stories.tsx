import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotFoundComponent } from '.';

export default {
  title: 'Components/NotFound',
  component: NotFoundComponent
} as ComponentMeta<typeof NotFoundComponent>

const Template: ComponentStory<typeof NotFoundComponent> = () => <NotFoundComponent />;

export const Default = Template.bind({});