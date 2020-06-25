<template>
    <div class="m_work-list-item" :class="{ 'inactive' : post.contentEngine[0] == undefined}" v-bind:style="{ backgroundColor: post.backgroundColor }">
        <nuxt-link :to="post.uri">
            <img lazy class="thumbnail" v-bind:src="post.thumbnail[0].url" alt="">
            <h4 v-bind:style="{ color: post.fontColor }">{{post.title}}</h4>
            <div>
                <img lazy class="logo" v-bind:src="post.logo[0].url" alt="">
                <time v-bind:style="{ color: post.fontColor, borderTopColor: post.fontColor }">{{$moment(post.postDate).format("MMMM Do YYYY")}}</time>
            </div>
        </nuxt-link>
    </div>
</template>

<style lang="scss">
    ul.work-list{
        max-width:$max-width;
        margin:0 auto;
        li{
            margin-bottom:1em;
        }
    }

    @media all and (min-width: 700px){
        ul.work-list{
            display:flex;
            justify-content: space-between;
            flex-wrap:wrap;
            li{
                width:48%;
                margin-bottom:4em;
            }
        }
    }

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
        img{
            transition:all 0.3s ease-in-out;
        }
        &.inactive{
            pointer-events:none;
            &:before{
                content:"Case Study Coming Soon :)";
                position:absolute;
                top:50%;
                left:50%;
                width:100%;
                transform:translateX(-50%) translateY(-50%) rotate(-3deg) translateZ(120px) scale(0.25);
                text-align:center;
                font-size:2em;
                padding:1em;
                z-index:9999;
                text-shadow: 0px 0px 5px rgba(0,0,0,0.33);
                color:#fff;
                font-weight: 700;
            }
            h4, img.thumbnail, img.logo, time{
                opacity:0.5;
            }
        }
        &:hover{
            box-shadow:0 0 3vw rgba(0,0,0,0.2);
            h4{
                text-shadow: 0 0 2vw rgba(0,0,0,0.75);
            }
            img.thumbnail{
                box-shadow:0 1vw 2vw rgba(0,0,0,0.3)
            }
            img.logo{
                box-shadow:0 0 1vw rgba(0,0,0,0.2)
            }
        }
        img.thumbnail{
            border-radius: 1em 2em;
            margin-top:0.25em;
            width:100%;
            position:relative;
            z-index:-1;
        }
        img.logo{
            max-width:80px;
            border-radius:50%;
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
            cursor:pointer;
            &:hover{
                text-decoration: none;
            }
        }
        h4{
            font-size:1.8em;
            line-height:1.1;
            transition:all 0.3s ease-in-out;
            width:100%;
            text-align:center;
            padding:0.3em 0.5em 0.25em;
            margin-bottom:0px;
        }
        time{
            display:inline-block;
            font-size:1.2em;
            padding: 0.5em 1em 0.5em;
            margin-top:0.5em;
            border-top:1px solid;
            width:100%;
            text-align:center;
        }
    }

    @media all and (min-width:1000px){
        div.m_work-list-item{
            h4{
                font-size:2.8em;
                padding:0.34em 0.5em 0.25em;
                transform: translateZ(140px) translateY(-151.5px) scale(0.075);
                transform-origin:bottom;
            }
            img.thumbnail{
                transform:translateZ(119px) translateY(57px) scale(0.2);
                transform-origin:center;
            }
            img.logo{
                max-width:220px;
                transform-origin:center;
                transform:translateZ(50px) scale(0.4);
                bottom:-1em;
                left:0em;
            }
            div{
                display:flex;
                align-items:flex-end;
                justify-content: flex-end;
                transform-style: preserve-3d;
                -webkit-transform-style: preserve-3d;
            }
            time{
                text-align:right;
                padding-right:0px;
                padding-left:3em;
                width:auto;
                font-size:1.4em;
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
        $('div.m_work-list-item').each(function(){
            $(this).tilt({
                maxTilt: 5
            });
        });
    }
}
</script>