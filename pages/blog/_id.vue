<template>
    <div>
        <div class="panel detail">   
            <!-- {{entries[0].title}} -->
            <h1>{{entries[0].title}}</h1>
            <div v-for="block in entries[0].contentEngine">
                <div v-if="block.__typename === 'contentEngine_richText_BlockType'">
                rich text
                </div>
                <div v-else-if="block.__typename === 'contentEngine_pullQuote_BlockType'">
                pull quote
                </div>
                <div v-else-if="block.__typename === 'contentEngine_image_BlockType'">
                image
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

export default {
    apollo: {
        entries: {
            query: posts,
            //fetchPolicy: 'no-cache',
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