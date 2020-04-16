<template>
    <div class="loading">
        <span>Now loading...</span>
    </div>
</template>

<style lang="scss">
    div.loading{
        position:fixed;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:1em;
        z-index:9000;
        background-color:#fff;
        span{
            font-size:32px;
            color:$secondary;
            font-style:italic;
        }
    }
</style>

<script>
export default {
    name: 'loading-screen',
    props: [
        'message'
    ],
    mounted(){
        console.log('loading active');
    }
}
</script>