<template>
    <a v-ahref="destination" class="button js-zoom" v-class="tertiary" >{{title}}</a>
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
   &.tertiary{
      background-color:#ff4d74;
   }
   &:active{
      top:0.23vw;
      left:0.4vw;
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
    name: "button",
    props: [
        'class', 'destination', 'title'
    ],
    computed: {
        stepComponent() {
            let data = this.canvas.split('/')[2];
            return () => import(`./animations/${data}`);
        }
    },
}
</script>