<template>
  <div class="logo">
    <span>Rob!</span>
  </div>
</template>

<style lang="scss">
div.logo{
  transform:translateX(5%) rotate($rotate);
  font-weight:700;
  position:absolute;
  top:3%;
  left:0%;
  font-size:12vw;
  margin-left:0.239em;
  z-index:2;
  color:$light;
  width:auto;
  text-align:center;
  &:after{
    content:'Rob!';
    font-family:$font;
    font-size:inherit;
    position:absolute;
    top:1vw;
    left:0.5vw;
    z-index:-1;
    color:black;
    text-align:center;
  }
  &.gradient-bg:after{
    background: -webkit-linear-gradient(45deg, $secondary, $primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size:100%;
  }
}

@media all and (min-width: 800px){
  div.logo{
    transform:translateX(-50%) rotate($rotate);
    left:50%;
    font-size:8vw;
  }
}
</style>
