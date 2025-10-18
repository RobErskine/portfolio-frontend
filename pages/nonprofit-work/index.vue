<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <sectionHeader post-title="Non-Profit Work" class-name="nonprofit" canvas="./animations/nonprofitcanvas"></sectionHeader>
        <section class="block">
            <ul class="work-list">
                <li v-for="post in entries">
                    <workItem :post="post"></workItem>
                </li>
            </ul>
        </section>
        <Footer/>>
    </div>
</template>


<style lang="scss">

</style>


<script>
//mixins
import everypage from '~/mixins/everypage';

// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import workItem from '~/components/work/workItem.vue'
import Logo from '~/components/Logo.vue'
import Footer from '~/components/Footer.vue'

// query
import posts from '~/queries/work/getWork.gql';

export default {
    data (){
        return {
            title: 'Non-Profit Work | Rob Erskine - Creative Developer',
            description: 'Work that I\'ve done where I didn\'t earn a cent, but still had a ton of fun and helped make a positive impact.',
            image: 'https://storage.googleapis.com/robs_portfolio/seo/non-profitwork.jpg'
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
    mixins: [everypage],
    apollo: {
        entries: {
            query: posts,
            variables: {
                "section": "work",
                "orderBy": "postdate Desc"
            }
        }
    },
    mounted(){
        everypage.setColors('#fff', '#00b5e9');
    },
    destroyed(){
        everypage.setColors('#fff', '3333');
    }
}
</script>