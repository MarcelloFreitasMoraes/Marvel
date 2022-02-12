import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SelectHeroComponent } from '.';

export default {
  title: 'Components/SelectHero',
  component: SelectHeroComponent
} as ComponentMeta<typeof SelectHeroComponent>

const Template: ComponentStory<typeof SelectHeroComponent> = (args) => <SelectHeroComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: {
    description: 'Descrição',
    id: 154511,
    modified: '2013-08-15T14:16:16-0400',
    name: 'Titulo do card',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/520d1ad3e543f',
      extension: 'jpg'
    }
  }
};