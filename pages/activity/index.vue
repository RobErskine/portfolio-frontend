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
    data (){
        return {
            title: 'Activity | Rob Erskine - Creative Developer',
            description: 'A small simple micro-feed of what Rob Erskine is up to. Playing vidya games, learning web dev, going on vacation, you name it.',
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