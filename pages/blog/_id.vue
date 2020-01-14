<template>
    <div>
        <Logo size="size-small" position="position-left"/>
        <div class="panel detail">   
            <!-- {{entries[0].title}} -->
            <header class="engine-block o_article-header text-align-center" :data-color="entries[0].contentEngine[0].fontColor" :data-background="entries[0].contentEngine[0].backgroundColor">
                <h1 class="m_headline">{{entries[0].title}}</h1>
                <span>Posted: <time>{{$moment(entries[0].postDate).format("MMMM Do YYYY")}}</time> Reading Time: {{entries[0].readingTime}}</span>
                <div v-if="entries[0].suggestedListeningEmbed">
                    <button>Suggested Listening: {{entries[0].suggestListeningTitle}} by {{entries[0].suggestListeningArtist}}</button>
                    <div class="m_video-frame"><iframe :data-id="entries[0].suggestedListeningEmbed" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
            </header>
            <div v-for="block in entries[0].contentEngine">
                <div class="engine-block o_rich-text" v-if="block.__typename === 'contentEngine_richText_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                    <div v-html="block.richText" />
                </div>
                <div class="engine-block o_pullquote" :class="`quote-size-`+block.quoteSize" v-else-if="block.__typename === 'contentEngine_pullQuote_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                    <blockquote>
                        {{block.quote}}
                        <span class="author" v-if="block.attribution">{{block.attribution}}</span>
                    </blockquote>
                </div>
                <div class="engine-block o_image" v-else-if="block.__typename === 'contentEngine_image_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                    <img :src="block.image[0].url" alt="">
                </div>
                <div v-else>
                    block does not exist
                </div>
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
            font-size:3.5em;
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
            display:inline-block;
            padding-right:1.25em;
            margin-right:1em;
            border-right:1px solid;
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

    @media all and (min-width: 900px){
        .o_article-header{
            padding:6em 3em 5em;
        }
    }
    
    .o_rich-text > div{
        max-width:900px;
        h1,h2,h3,h4,h5,h6{
            & + p{
                margin-top:0.8em;
            }
        }
        p:last-child{
            margin-bottom:0px;
        }
    }

    .o_image img{
        max-width:1200px;
        display:block;
        margin:0 auto;
        text-align:center;
    }

    .o_image img{
        width:100%;
    }

    .o_pullquote{
        max-width:750px;
        text-align:center;
        margin:0 auto;
        display:block;
        transform:rotate(-3deg);
        padding:1.5em 1em;
        blockquote{
            font-style:italic;
            span.author{
                font-size:16px;
            }
        }
        &.quote-size-small blockquote{
            font-size:1.75em;
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
// components
import Logo from '~/components/Logo';

// query
import posts from '~/queries/blog/getArticle.gql';

export default {
    components: {
        Logo
    },
    mounted: function(){
        // add youtube video
        if($('iframe').length > 0){
            var id = $('iframe').data('id');
            $('iframe').attr('src','https://www.youtube.com/embed/'+id);
        }

        $('header.o_article-header button').on('click', function(){
            $(this).toggleClass('active');
        });


        // on scroll change colors
        var blocks = document.querySelectorAll('.engine-block');

        if ('IntersectionObserver' in window) {
            var onChange = function onChange(changes, observer) {
                changes.forEach(function (change) {
                if (change.intersectionRatio > 0) {
                    // Stop watching and load the image
                    loadImage(change.target);
                    //observer.unobserve(change.target);
                }
                });
            };

            // IntersectionObserver Supported
            var config = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };
            var observer = new IntersectionObserver(onChange, config);
            blocks.forEach(function (block) {
                return observer.observe(block);
            });
        } else {
            // observer doesn't work in this browser
        }

        function loadImage(block) {
            var color = $(block).data('color');
            var background = $(block).data('background');
            $('div.panel.detail').css({
                'color': color,
                'backgroundColor': background
            });
        }
    },
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
    },
    // todo: get apollo data working in data for use in head
    // data(){
    //     return {
    //         entries:{},
    //         title: this.$route.params.id + ' | Rob Erskine - Creative Developer',
    //         description: 'Rob Erskine is a creative designer and developer obsessed with solving complex problems in collaborative environments',
    //         image: 'https://placehold.it/1200x630?text=TODO'
    //     }
    // },
    // head (){
    //     return {
    //         title: this.title,
    //         meta: [
    //             { hid: 'og:title', name: 'og:title', content:this.title },
    //             { hid: 'twitter:title', name: 'twitter:title', content:this.title },
    //             { hid: 'description', name: 'description', content: this.description },
    //             { hid: 'og:description', name: 'og:description', content: this.description },
    //             { hid: 'og:image', name: 'og:image', content: this.image },
    //             { hid: 'twitter:image', name: 'og:image', content: this.image }
    //         ]
    //     }
    // },
}
</script>