<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <!-- <sectionHeader post-title="Writing" class-name="blog" canvas="./animations/blogcanvas"></sectionHeader> -->
        <section class="block">
            <h1>Not Found :(</h1>
        </section>
    </div>
</template>

<style lang="scss">

</style>

<script>
import Logo from '~/components/Logo.vue'
    
export default{
    components: {
        Logo
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
}
</script>