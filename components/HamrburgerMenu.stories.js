import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Menu from './HamburgerMenu'
import '@/src/scss/_variables.scss'
storiesOf('Hamburger Menu', module)
    .add('Main Component', () => ({
        components: { Menu },
        template: '<Menu />'
    }))