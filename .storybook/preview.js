
import {  configure, setAddon, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);
addDecorator(withKnobs);

// configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);

const req = require.context('../src', true, /\.stories\.(js|mdx)$/)
// const req = require.context('../src', true, /.stories.js$/)


function loadStories() {
    req.keys().forEach(file => req(file))
}

configure(loadStories, module);