<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <sectionHeader post-title="Résumé" class-name="resume" canvas="./animations/resumecanvas"></sectionHeader>
        <section class="block copy">
            <h4>Here is resume content!</h4>
        </section>
    </div>
</template>

<style lang="scss">

</style>

<script>
// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import Logo from '~/components/Logo.vue'

// mixins
import everypage from '~/mixins/everypage';

export default {
    data (){
        return {
            title: 'Resume | Rob Erskine - Creative Developer',
            description: 'Resume for Rob Erskine, including advertising, marketing, user experience, design, and development work.',
            image: 'https://placehold.it/1200x630?text=TODO'
        }
    },
    head (){
        return {
            title: this.title,
            meta: [
                { hid: 'og:title', name: 'og:title', content:this.title },
                { hid: 'twitter:title', name: 'twitter:title', content:this.title },
                { hid: 'description', name: 'description', content: this.description },
                { hid: 'og:description', name: 'og:description', content: this.description },
                { hid: 'og:image', name: 'og:image', content: this.image },
                { hid: 'twitter:image', name: 'og:image', content: this.image }
            ]
        }
    },
    components: {
        HamburgerMenu,
        sectionHeader,
        Logo
    },
    // apollo: {
    //     entries: {
    //         query: posts,
    //         variables: {
    //             "section": "work",
    //             "orderBy": "postdate Desc",
    //             "relatedTo": 25
    //         }
    //     }
    // },
    mounted () {
        everypage.setColors('#fff', '#ffd664    ');
    },
    destroyed (){
        everypage.setColors('#fff', '#333');
    }
}
</script>