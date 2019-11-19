<template>
    <div class="panel has-content" data-x-pos="-1" data-y-pos="0">
        <HamburgerMenu />

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
body{
    overflow-x:hidden;
}
section.block{
    padding:8vh 1em;
    ul{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        margin:0px;
        padding:0px;
        li{
            width:48%;
            margin:0px;
            padding:0px;
            list-style-type:none;
        }
    }
}

@media all and (min-width:600px){
    section.block{
        ul li{
            width:32%;
        }
    }
}
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
            query: posts
        }
    }
}
</script>