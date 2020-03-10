<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <sectionHeader post-title="four oh four" class-name="fourohfour" canvas="./animations/404canvas"></sectionHeader>
        <section class="block copy text-align-center">
            <div class="block copy block-width copy">
                <h1>Ah shoot. The page you requested could not be found.</h1>
                <p style="padding-top:1em; max-width: 800px; margin:0 auto;">Sorry about that. Why not bounce back to the <a href="/">homepage</a>, check out <a href="/resume">my resume</a>, or visit <a href="/contact">my contact page</a> to tell me about your error.</p>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    section.intro.fourohfour{
        background-color:#e6fbff;
    }
</style>

<script>
import Logo from '~/components/Logo.vue';
import sectionHeader from '~/components/SectionHeader.vue';
    
export default{
    components: {
        Logo,
        sectionHeader
    },
    data (){
        return {
            title: 'Not Found :( | Rob Erskine - Creative Developer',
            description: 'Unfortunately the page you requests was not found. I am sorry. So sorry.',
            image: 'https://placehold.it/1200x630?text=TODO'
        }
    },
    head (){
        return {
            title: this.title,
            meta: [
                { hid: 'og:title', name: 'og:title', content:this.title },
                { hid: 'twitter:title', name: 'twitter:title', content:this.title },
                { hid: 'description', name: 'description', content: this.description },
                { hid: 'og:description', name: 'og:description', content: this.description },
                { hid: 'og:image', name: 'og:image', content: this.image },
                { hid: 'twitter:image', name: 'og:image', content: this.image }
            ]
        }
    },
    mounted: function(){
        
    }
}
</script>