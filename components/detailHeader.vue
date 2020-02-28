<template>
    <div>
        <header class="o_article-header text-align-center">
            <h1 class="m_headline">{{entry.title}}</h1>
            <span>Posted: <time>{{$moment(entry.postDate).format("MMMM Do YYYY")}}</time> Reading Time: {{entry.readingTime}}</span>
            <div v-if="entry.suggestedListeningEmbed">
                <button>Suggested Listening: {{entry.suggestListeningTitle}} by {{entry.suggestListeningArtist}}</button>
                <div class="m_video-frame"><iframe :data-id="entry.suggestedListeningEmbed" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            </div>
        </header>
    </div>
</template>

<style lang="scss">

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
            $('.o_article-header iframe').attr('src','https://www.youtube.com/embed/'+id+'?playsinline=1');
        
            if (! $('header.o_article-header button').hasClass('active')){
                $('header.o_article-header button').addClass('active');
            } else {
                $('header.o_article-header button').removeClass('active');
            }
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

