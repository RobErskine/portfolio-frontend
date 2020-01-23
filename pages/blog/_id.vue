<template>
    <div v-if="entries">
        <Logo size="size-small" position="position-left"/>
        <div class="panel detail">   
            <!-- {{entries[0].title}} -->
            <header class="engine-block o_article-header text-align-center" :data-color="entry.contentEngine[0].fontColor" :data-background="entry.contentEngine[0].backgroundColor">
                <h1 class="m_headline">{{entry.title}}</h1>
                <span>Posted: <time>{{$moment(entry.postDate).format("MMMM Do YYYY")}}</time> Reading Time: {{entry.readingTime}}</span>
                <div v-if="entry.suggestedListeningEmbed">
                    <button>Suggested Listening: {{entry.suggestListeningTitle}} by {{entry.suggestListeningArtist}}</button>
                    <div class="m_video-frame"><iframe :data-id="entry.suggestedListeningEmbed" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
            </header>
            <div v-for="block in entry.contentEngine">
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
            <nav class="m_end-article">
                <button class="button inline top primary">Back to top ⇡</button>
                <nuxt-link to="/blog">Back to Writing</nuxt-link>
            </nav>
            <Footer/>
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
            line-height:1;
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

    @media all and (min-width: 600px){
        .o_article-header{
            h1{
                font-size:3.5em;
            }
        }
    }

    @media all and (min-width:600px){
        .o_article-header{
            time{
                display:inline-block;
                padding-right:1.25em;
                margin-right:1em;
                border-right:1px solid;
            }
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
// components
import Logo from '~/components/Logo';
import Footer from '~/components/Footer';

// query
import posts from '~/queries/blog/getArticle.gql';

//mixins
import everypage from '~/mixins/everypage';

export default {
    components: {
        Logo,
        Footer
    },
    mixins: [everypage],
    apollo: {
        entries: {
            query: posts,
            prefetch: true,
            variables (){
                return{
                    section: "blog",
                    slug: this.$route.params.id
                }
            }
        }
    },
    mounted (){
        // testing
        console.log('Mounted!');

        // function for every page
        everypage.externalLinks();

        $('body').on('click', 'button.top', function(event){
            console.log('scroll clicked');
            $('div.panel.detail').animate({scrollTop:0},2000);
        });

        $('body').on('click', 'header.o_article-header button', function(){
            var id = $('.o_article-header iframe').data('id');
            $('.o_article-header iframe').attr('src','https://www.youtube.com/embed/'+id);
        
            if (! $('header.o_article-header button').hasClass('active')){
                $('header.o_article-header button').addClass('active');
                console.log('video on');
            } else {
                $('header.o_article-header button').removeClass('active');
                console.log('video off');
            }
        });

        // on scroll change colors
        var blocks = document.querySelectorAll('.engine-block');

        if ('IntersectionObserver' in window) {
            var onChange = function onChange(changes, observer) {
                changes.forEach(function (change) {
                if (change.intersectionRatio > 0) {
                    // Stop watching and load the image
                    colors(change.target);
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

        function colors(block) {
            var color = $(block).data('color');
            var background = $(block).data('background');
            $('div.panel.detail').css({
                'color': color,
                'backgroundColor': background
            });
        }
    },
    destroyed (){
        console.log('destroyed!');
        $('body').off('click', 'header.o_article-header button');
        this.$destroy();
    },
    computed: {
        entry (){
            return this.entries[0];
        }
    },
    head (){
        return {
            title: (this.entries ? `${this.entries[0].title}` : 'Loading...')
        }
    }
    // todo: get apollo data working in data for use in head
    // data(){
    //     return {
    //         entry:{},
    //         title: entry.title + ' | Rob Erskine - Creative Developer',
    //         description: 'Rob Erskine is a creative designer and developer obsessed with solving complex problems in collaborative environments',
    //         image: 'https://placehold.it/1200x630?text=TODO'
    //     }
    // },
    // head (){
    //     return {
    //         //title: entry.title,
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