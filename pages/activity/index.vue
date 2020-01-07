<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
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