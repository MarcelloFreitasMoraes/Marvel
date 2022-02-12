import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormComponent } from '.';

export default {
  title: 'Components/Form',
  component: FormComponent
} as ComponentMeta<typeof FormComponent>

const Template: ComponentStory<typeof FormComponent> = () => <FormComponent />;

export const Form = Template.bind({});