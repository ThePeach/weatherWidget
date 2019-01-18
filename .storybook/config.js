import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/atoms');
  require('../src/stories/molecules');
  // require('../src/stories/organisms');
}

configure(loadStories, module);
