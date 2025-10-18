<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <sectionHeader post-title="Pro Work" class-name="work" canvas="./animations/proworkcanvas"></sectionHeader>
        <section class="block">
            <ul class="work-list">
                <li v-for="post in entries">
                    <workItem :post="post"></workItem>
                </li>
            </ul>
        </section>
        <Footer/>
    </div>
</template>

<style lang="scss">

</style>

<script>
// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import workItem from '~/components/work/workItem.vue'
import Logo from '~/components/Logo.vue'
import Footer from '~/components/Footer.vue'

// query
import posts from '~/queries/work/getWork.gql';

// mixins
import everypage from '~/mixins/everypage';

export default {
    data (){
        return {
            title: 'Professional Work | Rob Erskine - Creative Developer',
            description: 'Professional Work for Rob Erskine, including advertising, marketing, user experience, design, and development work.',
            image: 'https://storage.googleapis.com/robs_portfolio/seo/prowork.jpg'
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
        workItem,
        Logo,
        Footer
    },
    apollo: {
        entries: {
            query: posts,
            variables: {
                "section": "work",
                "orderBy": "postdate Desc",
                "relatedTo": [24]
            }
        }
    },
    mounted () {
        everypage.setColors('#fff', '#007862');
    },
    destroyed (){
        everypage.setColors('#fff', '#333');
    }
}
</script>