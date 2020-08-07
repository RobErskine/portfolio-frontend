<template>
    <div class="m_blog-list-item" v-bind:style="{ backgroundColor: post.backgroundColor }">
        <nuxt-link :to="`/`+post.uri+`/`">
            <h4 v-bind:style="{ color: post.fontColor }">{{post.title}}</h4>
            <time v-bind:style="{ color: post.fontColor, borderTopColor: post.fontColor }">{{$moment(post.postDate).format("MMMM Do YYYY")}}</time>
        </nuxt-link>
    </div>
</template>

<style lang="scss">
    div.m_blog-list-item{
        border-radius:1em 2em;
        position:relative;
        display:flex;
        flex-wrap:wrap;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        transform: perspective(300px); 
        box-shadow:0 0 3vw rgba(0,0,0,0.1);
        -webkit-perspective: 300;
        &:hover{
            box-shadow:0 0 3vw rgba(0,0,0,0.2);
            h4{
                text-shadow: 0 0 1vw rgba(0,0,0,0.25);
            }
        }
        a{
            display:flex;
            flex-wrap:wrap;
            justify-content:flex-end;
            text-decoration: none;
            opacity:1;
            padding:1.5em 2em;
            transition:all 0.3s ease-in-out;
            &:hover{
                text-decoration: none;
            }
        }
        h4{
            width:100%;
            font-size:1.6em;
            line-height:1.1;
            transition:all 0.3s ease-in-out;
            transform: translateZ(66px) translateY(10px) scale(0.565);
        }
        time{
            display:inline-block;
            font-size:1.4em;
            padding-top:0.5em;
            margin-top:0.5em;
            border-top:1px solid;
        }
    }

    @media all and (min-width:700px){
        div.m_blog-list-item{
            h4{
                font-size:2.5vw;
            }
        }
    }

    ul.blog-list li{
        margin-bottom:2em;
    }

    @media all and (min-width: 600px){
        ul.blog-list{
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            li{
                width:48.5%;
            }
        }
    }

    @media all and (min-width: 1450px){
        ul.blog-list{
            li{
                width:31.5%;
            }
        }
        div.m_blog-list-item{
            h4{
                font-size:1.5vw;
            }
        }
    }
</style>

<script>
export default {
    props:{
        post: {
            type: Object
        }
    },
    mounted: function(){
        setTimeout(function(){
            $('div.m_blog-list-item').tilt({
                maxTilt: 10
            });
        }, 1000);
    }
}
</script>