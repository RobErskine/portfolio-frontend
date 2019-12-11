<template>
    <div class="panel has-content" data-x-pos="-1" data-y-pos="0">
        <HamburgerMenu />

        <sectionHeader post-title="For-Fun" class-name="for-fun" canvas="./animations/baebotcanvas"></sectionHeader>
        <section class="block copy">
            <ul>
                <li v-for="post in entries">
                    <workItem :post="post"></workItem>
                </li>
            </ul>
        </section>
    </div>
</template>

<style lang="scss">
section.block{
    padding:2em 1em;
    ul{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        align-items:center;
        margin:0px;
        padding:0px;
        li{
            width:100%;
            margin:0px 0px 1em;
            padding:0px;
            list-style-type:none;
        }
    }
}

@media all and (min-width:600px){
    section.block{
        padding:4vw 1em;
        ul li{
            width:46vw;
        }
    }
}

@media all and (min-width:1200px){
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
import workItem from '~/components/work/workItem.vue'

// query
import posts from '~/queries/work/getWork.gql';

export default {
    components: {
        HamburgerMenu,
        sectionHeader,
        workItem
    },
    apollo: {
        entries: {
            query: posts,
            variables: {
                "section": "work",
                "orderBy": "postdate Desc",
                "relatedTo": 25
            }
        }
    }
}
</script>