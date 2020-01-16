<template>
    <span><a :href="destination" class="button" :class="className">{{title}}</a></span>
</template>

<style lang="scss">
a.button,
button.button{
    display:inline-block;
    color:$light;
    text-decoration:none;
    font-size:1.2em;
    padding:0.4em 1em 0.5em;
    border-radius:1em;
    margin:1em;
    box-shadow:0.33vw 0.5vw 0vw #000;
    outline:none;
    cursor:pointer;
    position:relative;
    transition:background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0s ease-in-out;
    &.tertiary{
        background-color:#ff4d74;
    }
    &:active{
        top:0.23vw;
        left:0.4vw;
        box-shadow:0.1vw 0.25vw 0vw #000;
    }
}

@media all and (min-width: 700px){
    a.button,
    button.button{
        font-size:0.75em;
    }
}
</style>

<script>
export default {
    name: "customButton",
    props: [
        'className', 'destination', 'title'
    ],
    computed: {
    },
}
</script>