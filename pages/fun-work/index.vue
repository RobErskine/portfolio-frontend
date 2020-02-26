<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <sectionHeader post-title="For-Fun" class-name="for-fun" canvas="./animations/baebotcanvas"></sectionHeader>
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
//mixins
import everypage from '~/mixins/everypage';

// components
import sectionHeader from '~/components/SectionHeader.vue'
import Footer from '~/components/Footer';
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import workItem from '~/components/work/workItem.vue'
import Logo from '~/components/Logo.vue'

// query
import posts from '~/queries/work/getWork.gql';

export default {
    data (){
        return {
            title: 'Fun Work | Rob Erskine - Creative Developer',
            description: 'Fun personal design and development side projects from Rob Erskine. Chat and twitter bots, IoT, hacks, and more.',
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
                "orderBy": "postdate Desc",
                "relatedTo": 25
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