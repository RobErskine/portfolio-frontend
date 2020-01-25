import { configure } from '@storybook/vue';
import '@/src/scss/_variables.scss';
function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
