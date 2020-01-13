<template>
    <div>
        <div class="panel detail">   
            <!-- {{entries[0].title}} -->
            <h1>{{entries[0].title}}</h1>
            <div v-for="block in entries[0].contentEngine">
                <div v-if="block.__typename === 'contentEngine_richText_BlockType'">
                    {{block.richText}}
                </div>
                <div v-else-if="block.__typename === 'contentEngine_pullQuote_BlockType'">
                    {{block.quote}}
                </div>
                <div v-else-if="block.__typename === 'contentEngine_image_BlockType'">
                    {{block.image[0].url}}
                </div>
                <div v-else>
                block does not exist
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>

<script>
// query
import posts from '~/queries/blog/getArticle.gql';
// Only works in Apollo 3 [which as of 1/13/20 is in beta]
// import { InMemoryCache } from 'apollo-cache-inmemory';
// const cache = new InMemoryCache({
//     possibleTypes: {
//         contentEngine: ["contentEngine_richText_BlockType", "contentEngine_pullQuote_BlockType", "contentEngine_image_BlockType"],
//     },
// });

export default {
    apollo: {
        entries: {
            query: posts,
            variables (){
                return{
                    section: "blog",
                    slug: this.$route.params.id
                }
            }
        }
    }
}
</script>