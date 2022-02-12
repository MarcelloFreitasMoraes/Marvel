import * as NextImage from 'next/image';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/styles/global';

const OriginalNextImage = NextImage.default;

addDecorator((s) => (
  <>
    <GlobalStyle />
    {s()}
  </>
));

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
