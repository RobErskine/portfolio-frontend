<template>
    <div>
        <div class="panel detail">   
            {{entries[0].title}}
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
            fetchPolicy: 'no-cache',
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