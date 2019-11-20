<template>
    <div class="m_blog-list-item" v-bind:style="{ backgroundColor: post.backgroundColor }">
        <nuxt-link :to="post.uri">
            <h4 v-bind:style="{ color: post.fontColor }">{{post.title}}</h4>
        </nuxt-link>
        <time v-bind:style="{ color: post.fontColor, borderTopColor: post.fontColor }">{{post.postDate}}</time>
    </div>
</template>

<style lang="scss">
    div.m_blog-list-item{
        padding:1.5em 2em;
        border-radius:1em 2em;
        overflow:hidden;
        a{
            text-decoration: none;
            opacity:1;
            &:hover{
                text-decoration: none;
                opacity:0.8;
            }
        }
        h4{
            font-size:2.5vw;
            line-height:1.1;
        }
        time{
            display:block;
            font-size:1.5vw;
            padding-top:0.5em;
            margin-top:0.5em;
            border-top:1px solid;
        }
    }
</style>

<script>
export default {
    props:{
        post: {
            type: Object
        }
    }
}
</script>