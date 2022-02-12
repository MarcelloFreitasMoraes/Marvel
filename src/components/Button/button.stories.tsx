import React from 'react';

import { ButtonComponent } from '.';

export default {
  title: 'Components/Button',
  component: ButtonComponent
}

export const Text = () => <ButtonComponent title="Button" onClick={() => { }} type="button" primary />