<template>
    <div v-if="entries">
        <Logo size="size-small" position="position-left"/>
        <div class="panel detail" :style="`color:`+entry.contentEngine[0].fontColor+`; background-color:`+entry.contentEngine[0].backgroundColor">   
            <DetailHeader :entry="entry" />
            <Engine :engine="entry.contentEngine"/>
            <EndPage destination="blog" label="Writing ✏️"/>
            <Footer/>
        </div>
    </div>
</template>

<style lang="scss">
</style>

<script>
// components
import Logo from '~/components/Logo';
import Footer from '~/components/Footer';
import DetailHeader from '~/components/detailHeader';
import Engine from '~/components/work/engine';
import EndPage from '~/components/work/endPage';
import Loading from '~/components/Loading';

// query
import posts from '~/queries/blog/getArticle.gql';

//mixins
import everypage from '~/mixins/everypage';

export default {
    components: {
        Logo,
        Footer,
        DetailHeader,
        EndPage, 
        Engine,
        Loading
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

        // on scroll change colors
        var blocks = document.querySelectorAll('.engine-block');

        setTimeout(function(){
            $('div.panel.detail').on('scroll', function(event){
                $('.engine-block').each(function() {
                    var $el = $(this);
                    if ($el.visible(false)) {
                        colors($el);
                    }
                });
            });
        },1000);

        function colors(block) {
            var color = $(block).data('color');
            var background = $(block).data('background');
            $('div.panel.detail').css({
                'color': color,
                'backgroundColor': background
            });
            document.documentElement.style.setProperty('--color', background);
            document.documentElement.style.setProperty('--tint-color', color);
        }

        colors($('div.panel.detail header + div > div'));
    },
    destroyed (){
        console.log('destroyed!');
        $('body').off('click', 'header.o_article-header button');
        $('div.panel.detail').off('scroll');
        document.documentElement.style.setProperty('--color', '#fff');
        document.documentElement.style.setProperty('--tint-color', '#000');
        this.$destroy();
    },
    computed: {
        entry (){
            return this.entries[0];
        }
    },
    head (){
        return {
            title: (this.entries ? `${this.entries[0].title}` + ' | Rob Erskine - Creative Developer' : 'Loading...'),
            meta: [
                {hid: 'og:title', name: 'og:title', content:(this.entries ? `${this.entries[0].title}` : 'Loading...')},
                {hid: 'twitter:title', name: 'twitter:title', content:(this.entries ? `${this.entries[0].title}` : 'Loading...')},
                {hid: 'description', name: 'description', content:(this.entries ? `${this.entries[0].seoDescription}` : 'Loading...')},
                {hid: 'og:description', name: 'og:description', content:(this.entries ? `${this.entries[0].seoDescription}` : 'Loading...')},
                {hid: 'og:image', name: 'og:image', content: (this.entries ? `${this.entries[0].seoImage[0].url}` : '')},
                {hid: 'twitter:image', name: 'og:image', content: (this.entries ? `${this.entries[0].seoImage[0].url}` : '') }
            ]
        }
    }
}
</script>