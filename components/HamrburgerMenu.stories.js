import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
//import '../src/scss/_variables.scss';
import Menu from './HamburgerMenu'
storiesOf('Hamburger Menu', module)
    .add('As a component', () => ({
        components: { Menu },
        template: '<Menu />'
    }))
    .add('I don\'t work', () => '<List />')