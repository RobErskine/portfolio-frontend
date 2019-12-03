<template>
    <div class="panel has-content" data-x-pos="-1" data-y-pos="0">
        <HamburgerMenu />

        <sectionHeader post-title="Activity" class-name="activity" canvas="./animations/activitycanvas"></sectionHeader>
        <section class="block copy">
            <ul>
                <li v-for="post in entries">
                    <activityItem :post="post"></activityItem>
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
    padding:4vw 1em;
    ul{
        display:flex;
        justify-content:space-around;
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

</style>

<script>
// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import activityItem from '~/components/activity/activityItem.vue'

// query
import posts from '~/queries/activity/getActivity.gql';

export default {
    components: {
        HamburgerMenu,
        sectionHeader,
        activityItem
    },
    apollo: {
        entries: {
            query: posts,
            variables: {
                "section": "activity",
                "orderBy": "postdate Desc",
            }
        }
    }
}
</script>