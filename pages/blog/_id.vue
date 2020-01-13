<template>
    <div>
        <div class="panel detail">   
            <!-- {{entries[0].title}} -->
            <header class="engine-block o_article-header text-align-center" :data-color="entries[0].contentEngine[0].fontColor" :data-background="entries[0].contentEngine[0].backgroundColor">
                <h1 class="m_headline">{{entries[0].title}}</h1>
                <span>Posted: <time>{{$moment(entries[0].postDate).format("MMMM Do YYYY")}}</time></span>
            </header>
            <div v-for="block in entries[0].contentEngine">
                <div class="engine-block o_rich-text" v-if="block.__typename === 'contentEngine_richText_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                    <div v-html="block.richText" />
                </div>
                <div class="engine-block o_pullquote" :class="`quote-size-`+block.quoteSize" v-else-if="block.__typename === 'contentEngine_pullQuote_BlockType'" :data-color="block.fontColor" :data-background="block.backgroundColor">
                    <blockquote>
                        {{block.quote}}
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
        padding:2em;
        & > div{
            display:block;
            margin:0 auto;
        }
    }

    .o_article-header{
        text-align:center;
        padding:6em 3em 5em;
        h1{
            font-size:3.5em;
        }
        span{
            display:block;
            padding:1em;
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
        padding:3em 1em;
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

    div.panel.detail{
        transition:all 1s ease-in-out;
    }
</style>

<script>
// query
import posts from '~/queries/blog/getArticle.gql';

export default {
    mounted: function(){
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