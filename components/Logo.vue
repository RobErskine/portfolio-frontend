<template>
  <div class="logo" :class="[position,size]">
    <a href="/"><span aria-hidden="true">Rob!</span><span class="aria-hidden">Return to home</span></a>
  </div>
</template>

<style lang="scss">
div.logo{
  //display:none; // TODO: hide so i can work on this at work :eyes: 

  transform:translateX(5%) rotate($rotate);
  font-weight:900;
  position:fixed;
  top:6px;
  left:10px;
  font-size:15vw;
  margin-left:0.133em;
  z-index:2;
  //color:var(--color);
  width:auto;
  text-align:center;
  a{
    color:$light;
    text-decoration:none;
    transition:all 0.3s ease-in-out;
    //-webkit-text-stroke: 0.1vw var(--color); TODO: never make copy white
  }
  &:after{
    content:'Rob!';
    font-family:$font;
    font-size:inherit;
    position:absolute;
    top:0.75vh;
    left:0.75vh;
    z-index:-1;
    color:var(--tint-color);
    text-align:center;
    transition:all 0.3s ease-in-out;
    transform:scale(1.025);
  }
  &.gradient-bg:after{
    background: -webkit-linear-gradient(45deg, $secondary, $primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size:100%;
  }
  &.position-left{
    z-index:3;
    left:0%;
    transform:rotate($rotate);
  }
}

@media all and (min-width: 800px){
  div.logo{
    transform:translateX(-50%) rotate($rotate);
    left:50%;
    font-size:8vw;
  }
  div.logo.size-small{
    font-size:5vw;
  }
}
</style>

<script>
export default {
    name: "Logo",
    props: [
        'position', 'size'
    ],
    computed: {
    },
}
</script>