import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputComponent } from '.';

export default {
  title: 'Components/InputField',
  component: InputComponent
} as ComponentMeta<typeof InputComponent>

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Search = Template.bind({});

Search.args = {
  onClick: () => { },
  onChange: () => { },
  placeholder: 'Digite seu heroi aqui...'
};