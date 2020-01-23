<template>
    <nav class="m_end-page">
        <button class="button inline top primary">Back to top 🔝</button>
        <nuxt-link :to="`/`+destination+`/`" class="button inline primary">Back to {{label}}</nuxt-link>
    </nav>
</template>

<style lang="scss">
    nav.m_end-page{
        margin:0 auto;
        display:block;
        text-align:center;
        .button{
            transform:rotate($rotate);
            font-size:1.2em;
            display:inline-block;
            background-color:rgba($dark,0.25);
        }
    }
</style>

<script>
export default {
    name: "EndPage",
    props: [
        'destination', 'label'
    ],
    mounted (){
        $('body').on('click', 'button.top', function(event){
            console.log('scroll clicked');
            $('div.panel.detail').animate({scrollTop:-1},1000);
        });
    },
}
</script>