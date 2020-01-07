<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


pre{
    white-space:pre-line;
    color:#fff;
    background-color:#333;
    padding:1em;
    border-radius:1.5em 3em;
    width:calc(100% + 2em);
    margin-left:-1em;
}

@media all and (min-width:700px){
    pre{
        width:100%;
        margin-left:auto;
    }
}

p,pre{
    margin-bottom:1.2em;
    line-height:1.375;
}

@media all and (min-width: 700px){
    p,pre{
        font-size:1.2em;
    }
}

p,pre{
  a:not(.button){
    color:inherit;
    display:inline-block;
    text-decoration:none;
    background-size:  100% 10%;
    background-repeat: repeat-x;
    background-position: left 0% bottom 5%;
    background-image: linear-gradient(110deg, $primary 0%, $secondary 50%);
    transition:all 0.25s ease-in-out;
    overflow:visible;
    span{
      display:inline-block;
      height:1em;
      width:1em;
      background-size:contain;
      margin-right:0.25em;
      position:relative;
      top:0.15em;
    }
    &:hover{
        background-size:  120% 100%;
        color:#fff;
    }
  }
}

div.block-width{
    max-width: 1200px;
    margin:0 auto;
}
</style>

<script>
if(process.client){
}

export default{
  mounted: function(){
  }
}
</script>