<template>
    <div class="m_work-list-item" v-bind:style="{ backgroundColor: post.backgroundColor }">
        <nuxt-link :to="post.uri">
            <img class="thumbnail" v-bind:src="post.thumbnail[0].url" alt="">
            <h4 v-bind:style="{ color: post.fontColor }">{{post.title}}</h4>
            <div>
                <img class="logo" v-bind:src="post.logo[0].url" alt="">
                <time v-bind:style="{ color: post.fontColor, borderTopColor: post.fontColor }">{{$moment(post.postDate).format("MMMM Do YYYY")}}</time>
            </div>
        </nuxt-link>
    </div>
</template>

<style lang="scss">
    div.m_work-list-item{
        border-radius:1em 2em;
        position:relative;
        display:block;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        transform: perspective(300px); 
        box-shadow:0 0 3vw rgba(0,0,0,0.1);
        -webkit-perspective: 300;
        position:relative;
        &:hover{
            box-shadow:0 0 3vw rgba(0,0,0,0.2);
            h4{
                text-shadow: 0 0 1vw rgba(0,0,0,0.25);
            }
        }
        img.thumbnail{
            border-radius: 1em 2em;
            padding-top:0.5em;
            width:100%;
            transform:translateZ(8vw) scale(0.2) translateY(18vw);
        }
        img.logo{
            max-width:80px;
            border-radius:50%;
            //transform:translateZ(60px) scale(0.55);
            position:absolute;  
            bottom:1em;
            left:-1em;
        }
        a{
            display:block;
            text-decoration: none;
            opacity:1;
            padding:0.5em 1em;
            transition:all 0.3s ease-in-out;
            &:hover{
                text-decoration: none;
                //transform: translateZ(100px) scale(1);
            }
        }
        h4{
            font-size:2em;
            line-height:1.1;
            transition:all 0.3s ease-in-out;
            //transform: translateZ(66px) scale(0.565);
            width:100%;
            text-align:center;
            padding:0.3em 0.5em 0.25em;
        }
        time{
            display:inline-block;
            font-size:1.4em;
            padding: 0.5em 1em 0.5em;
            margin-top:0.5em;
            border-top:1px solid;
            width:100%;
            text-align:center;
        }
    }

    @media all and (min-width:1000px){
        div.m_work-list-item{
            h4,img{
                transform-origin:center;
            }
            h4{
                font-size:3em;
                padding:0.3em 0.5em 0.25em;
                transform: translateZ(120px) translateY(-123px) scale(0.25);
            }
            img.thumbnail{
                transform:translateZ(30%) translateY(2vw) scale(0.6);
            }
            img.logo{
                transform: translateZ(90px) translateY(-50px) scale(0.33);
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
    }
}

if(process.client){
    $('div.m_work-list-item').each(function(){
        $(this).tilt({
            maxTilt: 7
        });
    });
}
</script>