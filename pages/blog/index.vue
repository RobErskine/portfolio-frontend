<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">

        <sectionHeader post-title="Writing" class-name="blog" canvas="./animations/blogcanvas"></sectionHeader>
        <section class="block copy">
            <ul>
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

// query
import posts from '~/queries/blog/getArticles.gql';

export default {
    components: {
        HamburgerMenu,
        sectionHeader,
        blogItem
    },
    apollo: {
        entries: {
            query: posts,
            variables: {
                "section": "blog",
                "orderBy": "postdate Desc",
            }
        }
    }
}
</script>