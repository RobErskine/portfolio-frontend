<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <sectionHeader post-title="Writing" class-name="blog" canvas="./animations/blogcanvas"></sectionHeader>
        <section class="block">
            <ul class="blog-list">
                <li v-for="post in entries">
                    <blogItem :post="post"></blogItem>
                </li>
            </ul>
        </section>
    </div>
</template>

<style lang="scss">

</style>

<script>
// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import blogItem from '~/components/blog/listItem.vue'
import Logo from '~/components/Logo.vue'

// query
import posts from '~/queries/blog/getArticles.gql';

//mixins
import everypage from '~/mixins/everypage';

export default {
    data (){
        return {
            title: 'Blog | Rob Erskine - Creative Developer',
            description: 'The latest writing from Rob Erskine about design, development, cooking, and other musings',
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
    mixins: [everypage],
    components: {
        HamburgerMenu,
        sectionHeader,
        blogItem,
        Logo
    },
    apollo: {
        entries: {
            query: posts,
            variables: {
                "section": "blog",
                "orderBy": "postdate Desc",
            }
        }
    },
    mounted (){
        everypage.setColors('#fff', '#ff364e');
    },
    destroyed (){
        everypage.setColors('#fff', '#333');
    }
}
</script>