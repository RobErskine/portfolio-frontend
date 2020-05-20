<template>
    <div>
        <header class="o_article-header text-align-center">
            <h1 class="m_headline">{{entry.title}}</h1>
            <span>Posted: <time>{{$moment(entry.postDate).format("MMMM Do YYYY")}}</time> Reading Time: <time class="reading-time"></time></span>
            <div v-if="entry.suggestedListeningEmbed">
                <button>Suggested Listening: {{entry.suggestListeningTitle}} by {{entry.suggestListeningArtist}} <span class="aria-hidden">Click to open video player</span></button>
                <div class="m_video-frame intro-video"><iframe :data-id="entry.suggestedListeningEmbed" src="" frameborder="0" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            </div>
        </header>
    </div>
</template>

<style lang="scss">
    .intro-video{
        display:none;
        max-width:500px;
        margin:0 auto;
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
            display:inline-block;
            min-width:90px;
        }
        time:first-child{
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
            time:first-child{
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
</style>

<script>

// query
import posts from '~/queries/blog/getArticle.gql';

//mixins
import everypage from '~/mixins/everypage';

export default {
    props: [
        'entry'
    ],
    mounted (){
        $('body').on('click', 'header.o_article-header button', function(){
            var id = $('.o_article-header iframe').data('id');
            $('.o_article-header iframe').attr('src','https://www.youtube.com/embed/'+id+'?playsinline=1&autoplay=true');
        
            if (! $('header.o_article-header button').hasClass('active')){
                $('header.o_article-header button').addClass('active');
            } else {
                $('header.o_article-header button').removeClass('active');
                $('.o_article-header iframe').attr('src','');
            }
        });

        $(function(){
            const wordsPerMinute = 200; // Average case.
            let result;
            let text = $('div.article-content').text();
            console.log(text);

            let textLength = text.split(" ").length; // Split by words
            console.log(textLength);
            if(textLength > 0){
                let value = Math.ceil(textLength / wordsPerMinute);
                result = `~${value} minutes`;
            }
            $('time.reading-time').text(result);
        });
    },
    destroyed (){
        
    },
    computed: {
    },
    head (){
    }
}
</script>

