<template>
    <div class="panel has-content" data-x-pos="0" data-y-pos="0">
        <HamburgerMenu />

        <sectionHeader post-title="Pro Work" class-name="work" canvas="./animations/proworkcanvas"></sectionHeader>
        <section class="block copy">
            <h4>I'm currently working at Hill Holliday as VP, Lead Creative Technologist.</h4>
            <p>I head up our creative technology practice for our Healthcare and Retail teams, working for brands like Novartis, Party City, and Frontier.</p>
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