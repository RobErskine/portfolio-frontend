<template>
    <div>
        <div v-for="(block,index) in engine">
            <div :id="`id-`+index" class="engine-block o_video" v-if="block.__typename === 'contentEngine_video_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <div class="m_video-frame block">
                    <iframe :src="`https://www.youtube.com/embed/` + block.videoEmbedId" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div :id="`id-`+index" class="engine-block o_rich-text" v-else-if="block.__typename === 'contentEngine_richText_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <div v-html="block.richText" />
            </div>
            <div :id="`id-`+index" class="engine-block o_pullquote" :class="`quote-size-`+block.quoteSize" v-else-if="block.__typename === 'contentEngine_pullQuote_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <blockquote>
                    {{block.quote}}
                    <span class="author" v-if="block.attribution">{{block.attribution}}</span>
                </blockquote>
            </div>
            <div :id="`id-`+index" class="engine-block o_image" :class="block.imageWidth" v-else-if="block.__typename === 'contentEngine_image_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <img :src="block.image[0].url" alt="">
            </div>
            <div :id="`id-`+index" class="engine-block o_code" v-else-if="block.__typename === 'contentEngine_code_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <client-only><prism language="js">{{block.code}}</prism></client-only>
            </div>
            <div :id="`id-`+index" class="engine-block o_twitter" v-else-if="block.__typename === 'contentEngine_twitter_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <div v-if="block.twitterType === 'tweet'">
                    <Tweet :id="block.twitterID" :options="{ theme: 'dark' }" error-message-class="aria-hidden"></Tweet>
                </div>
                <div v-else-if="block.twitterType === 'timeline'">    
                    <Timeline :id="block.twitterID" sourceType="profile" :options="{ tweetLimit: '3' }" error-message-class="aria-hidden"/>
                </div>
                <div v-else>
                    Twitter Block does not exist
                </div>
            </div>
            <div v-else>
                block does not exist
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .o_rich-text,
    .o_image,
    .o_blockquote{
        padding:2em 1em;
        & > div{
            display:block;
            margin:0 auto;
        }
        &.half-width{
            max-width:600px;
            margin:0 auto;
        }
    }

    div.m_video-frame{
        position:relative;
        width:100%;
        margin:0 auto;
        overflow:hidden;
        border-radius:1em 2em;
        iframe{
            position:absolute;
            width:100%;
            height:100%;
            top:0px;
            right:0px;
            bottom:0px;
            left:0px;
        }
        &:after{
            content:"";
            display:block;
            padding-top:56.25%;
        }
    }

    
    .o_rich-text > div{
        max-width:900px;
        h1,h2,h3,h4,h5,h6{
            line-height:1.25;
            & + p{
                margin-top:0.8em;
            }
        }
        p:last-child{
            margin-bottom:0px;
        }
        blockquote{
            opacity:0.75;
            border-left:3px solid;
            margin-bottom:1em;
            font-size:1.2em;
            padding-left:0.5em;
        }
        ul,ol{
            padding-left:1em;
            margin-left:1em;
            li{
                margin-bottom:1em;
            }
            li{
                font-size:1.2em;
            }
        }
        ul{
            li{
                position:relative;
                &:before{
                    content:url('/images/shiny.svg');
                    position:absolute;
                    top:-0.1em;
                    left:-1em;
                    height:0.6em;
                    width:0.6em;
                    color:inherit;
                }
            }
        }
        ol {
            li {
                list-style-type: italic;
                
                a {
                    color: inherit;
                }
            }
        }
    }

    .o_image img{
        max-width:1200px;
        display:block;
        margin:0 auto;
        text-align:center;
    }

    .o_code{
        max-width: 1200px;
        display:block;
        margin:0 auto;
        a{
            text-decoration: none;
        }
        code{
            margin: 1em;
            display:block;
            width:calc(100% - 2em);
            border-radius:1em 2em;
            overflow:auto;
        }
        pre[class*="language-"]{
            background-color:var(--tint-color);
            transition:all 1s ease-in-out;
        }
        .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin{
            color: var(--tint-color);
            transition:all 1s ease-in-out;
        }
    }

    @media all and (min-width: 700px){
        .o_code{
            code{
                padding: 1em;
            }
        }
    }

    .o_image img{
        width:100%;
        border-radius:8px;
    }

    .o_twitter{
        display:block;
        margin:0 auto;
        iframe{
            width:100%;
            max-width:600px;
            margin:0 auto;
            display:block;
        }
        .twitter-timeline{
            max-width:600px !important;
            display: block !important;
        }
        twitter-widget,
        .twitter-tweet{
            margin:0 auto !important;
            border-radius:1em 3em;
        }
    }

    .o_pullquote{
        max-width:750px;
        text-align:center;
        margin:0 auto;
        display:block;
        transform:rotate($rotate);
        padding:1.5em 1em;
        blockquote{
            font-style:italic;
            span.author{
                font-size:0.7em;
                position:relative;
                top:-0.15em;
                &:before{
                    content:' —',
                }
            }
        }
        &.quote-size-small blockquote{
            font-size:1.6em;
        }
        &.quote-size-medium blockquote{
            font-size:2em;
        }
        &.quote-size-large blockquote{
            font-size:2.5em;
        }
        &.quote-size-extra-large blockquote{
            font-size:3em;
        }
    }

    @media all and (min-width: 700px){
        .o_pullquote{
            padding:3em 1em;
        }
    }

    div.panel.detail{
        transition:all 1s ease-in-out;
    }
</style>

<script>
import { Tweet, Timeline } from 'vue-tweet-embed'

export default {
    name: "Engine",
    components: {
        Tweet,
        Timeline
    },
    props: [
        'engine'
    ],
}
</script>