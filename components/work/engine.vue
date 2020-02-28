<template>
    <div>
        <div v-for="(block,index) in engine">
            <div :id="`id-`+index" class="engine-block o_rich-text" v-if="block.__typename === 'contentEngine_richText_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <div v-html="block.richText" />
            </div>
            <div :id="`id-`+index" class="engine-block o_pullquote" :class="`quote-size-`+block.quoteSize" v-else-if="block.__typename === 'contentEngine_pullQuote_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <blockquote>
                    {{block.quote}}
                    <span class="author" v-if="block.attribution">{{block.attribution}}</span>
                </blockquote>
            </div>
            <div :id="`id-`+index" class="engine-block o_image" v-else-if="block.__typename === 'contentEngine_image_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <img :src="block.image[0].url" alt="">
            </div>
            <div :id="`id-`+index" class="engine-block o_code" v-else-if="block.__typename === 'contentEngine_code_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                <client-only><prism language="js">{{block.code}}</prism></client-only>
            </div>
            <div v-else>
                block does not exist
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .o_article-header,
    .o_rich-text,
    .o_image,
    .o_blockquote{
        padding:2em 1em;
        & > div{
            display:block;
            margin:0 auto;
        }
    }

    .o_article-header{
        text-align:center;
        padding:10em 1em 3em;
        h1{
            font-size:2.25em;
            line-height:1.1;
        }
        span,
        button{
            appearance:none;
            display:inline-block;
            padding:1em;
            background-color:transparent;
            color:inherit;
            border:none;
            text-align:center;
        }
        button{
            width:100%;
            display:block;
            cursor:pointer;
            text-align:center;
            font-size:1em;
            padding:0.25em 0.5em;
            margin-bottom:0.5em;
            outline:none;
            color:inherit;
            &:after{
                content:"⇣";
                display:inline-block;
                padding-left:0.5em;
            }
            &.active{
                &:after{
                    content:"⇡";
                }
                & + div{
                    display:block;
                }
            }
        }
        time{
            display:block;
            margin-bottom:0.5em;
        }
        span{
            display:block;
        }
    }

    @media all and (min-width:600px){
        .o_article-header{
            h1{
                font-size:3.5em;
            }
            time{
                display:inline-block;
                padding-right:1.25em;
                margin-right:1em;
                border-right:1px solid;
            }
        }
    }

    @media all and (min-width: 900px){
        .o_article-header{
            padding:9em 3em 2em;
            max-width:75em;
            margin:0 auto;

        }
    }

    div.m_video-frame{
        position:relative;
        width:100%;
        max-width:500px;
        margin:0 auto;
        display:none;
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
                font-size:16px;
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
export default {
    name: "Engine",
    props: [
        'engine'
    ],
}
</script>