<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <sectionHeader post-title="Pro Work" class-name="work" canvas="./animations/proworkcanvas"></sectionHeader>
        <section class="block copy">
            <h4>I'm currently working at Hill Holliday as VP, Lead Creative Technologist.</h4>
            <p>I head up our creative technology practice for our Healthcare and Retail teams, working for brands like Novartis, Party City, and Frontier.</p>
        </section>
    </div>
</template>

<style lang="scss">

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