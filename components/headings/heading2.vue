<template>
    <h2 class="heading" :data-title="postTitle"><span>{{postTitle}}</span></h2>
</template>

<style lang="scss">
h2.heading{
    text-shadow:none;
    position:absolute;
    bottom:-1.25em;
    left:50%;
    transform:translate(-50%, -50%) rotate($rotate);
    font-size:12vw;
    transition:all 0.5s ease-in-out;
    transform-origin:top left;
    width:80%;
    text-align:center;
    margin:0px;
    color:$light;
    font-weight:900;
    line-height:1;
    span{
        position:relative;
        z-index:2;
    }
    &:after{
        content:attr(data-title);
        background-color: $primary;
        background: -webkit-linear-gradient(45deg, $primary, $secondary);
        // background: conic-gradient(
        //     $primary,
        //     $secondary
        // ) fixed;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position:absolute;
        top:0.1em;
        left:0.1em;
        z-index:-1;
        width:100%;
    }
}

@media all and (min-width: 700px){
    h2.heading{
        font-size:6vw;
        width:auto;
        line-height:1.375;
    }
}
</style>

<script>
export default {
    props:[
        'postTitle'
    ]
}
</script>