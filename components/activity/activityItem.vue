<template>
    <div class="m_activity-list-item" v-bind:style="{ backgroundColor: post.backgroundColor }">
        <div v-bind:style="{ color: post.fontColor}" v-html="post.richText"></div>
        <time v-bind:style="{ color: post.fontColor, borderTopColor: post.fontColor }" data-time="">{{post.postDate}}</time>
    </div>
</template>

<style lang="scss">
    section.activity-list{
        p{
            margin-bottom:1em;
            &:last-child{
                margin-bottom:0px;
            }
            a{
                display:inline;
            }
        }
        li{
            margin-bottom:1em;
        }
    }

    @media all and (min-width: 600px){
        section.activity-list{
            ul{
                display:flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            li{
                width:48%;
            }
        }
    }

    @media all and (min-width: 900px){
        section.activity-list{
            li{
                width:31.5%;
            }
        }
    }

    @media all and (min-width: 1450px){
        section.activity-list{
            li{
                width:23.5%;
            }
        }
    }

    @media all and (min-width: 1800px){
        section.activity-list{
            li{
                width:18.75%;
            }
        }
    }
    
    div.m_activity-list-item{
        border-radius:1em 2em;
        position:relative;
        display:flex;
        flex-wrap:wrap;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        transform: perspective(300px); 
        box-shadow:0 0 3vw rgba(0,0,0,0.1);
        -webkit-perspective: 300;
        padding:1.5em 2em;
        cursor:default;
        &:hover{
            box-shadow:0 0 3vw rgba(0,0,0,0.2);
            h4{
                text-shadow: 0 0 1vw rgba(0,0,0,0.25);
            }
        }
        div{
            width:100%;
            display:block;
            color:inherit;
        }
        a{
            color:inherit;
            line-height: auto;
        }
        p{
            width:100%;
            display:block;
            font-size:1.4em;
            line-height:1.4;
            line-height:1.1;
            transition:all 0.3s ease-in-out;
            transform: translateZ(66px) translateY(-5px) scale(1);
        }
        time{
            display:block;
            font-size:1.4em;
            padding-top:0.5em;
            margin-top:0.66em;
            border-top:1px solid;
        }
    }

    @media all and (min-width:700px){
        div.m_activity-list-item{
            h4{
                font-size:2.5vw;
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
            $('div.m_activity-list-item').each(function(){
                $(this).tilt({
                    maxTilt: 10
                });
            });
        }, 1000);
    }
}
</script>