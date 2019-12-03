<template>
   <div class="container">
      <HamburgerMenu />
      <div class="site-wrap">
         <div class="panel-wrap animate--shrink">
            <!-- Center Center -->
            <div class="panel intro" data-x-pos="0" data-y-pos="0">
               <header class="main-header">
                  <div class="block">
                     <div class="logo">
                        <span>Rob!</span>
                     </div>
                  </div>
               </header>
               <section class="intro intro-design">
                  <canvas class="intro-canvas" width="960" height="960"></canvas>
                  <span class="copy">
                     <h1 class="heading">Hey there,</h1>
                     <p>I’m a creative designer and developer obsessed with solving complex problems</p>
                     <p><a href="#" class="button tertiary js-zoom">Learn more</a></p>
                  </span>
                  <div class="code">
                     <div class="row"></div>
                     <div class="row"></div>
                     <div class="row"></div>
                     <div class="row"></div>
                     <div class="row"></div>
                     <div class="row"></div>
                     <div class="row"></div>
                     <div class="row"></div>
                     <div class="row"></div>
                     <div class="row"></div>
                     <div class="row"></div>
                     <span class="disclaimer">*I do have hair. Too hard to draw tho.</span>
                  </div>
                  <div class="design">
                     <div class="window"><div></div></div>
                  </div>
               </section>
            </div>

            <!-- Top Center -->
            <div class="panel has-content" data-x-pos="0" data-y-pos="1">
               <sectionHeader post-title="Résumé" class-name="resume" canvas="./animations/resumecanvas"></sectionHeader>
            </div>

            <!-- Top Left -->
            <div class="panel has-content" data-x-pos="-1" data-y-pos="1">
               <sectionHeader post-title="About Me" class-name="about" canvas="./animations/aboutcanvas"></sectionHeader>
            </div>

            <!-- Top Right -->
            <div class="panel has-content" data-x-pos="1" data-y-pos="1">
               <sectionHeader post-title="Pro Work" class-name="work" canvas="./animations/proworkcanvas"></sectionHeader>
               <section class="block copy">
                  <h4>I'm currently working at Hill Holliday as VP, Lead Creative Technologist.</h4>
                  <p>I head up our creative technology practice for our Healthcare and Retail teams, working for brands like Novartis, Party City, and Frontier.</p>
               </section>
               <section class="buffer"></section>
               <section class="buffer"></section>
               <section class="buffer"></section>
               <section class="buffer"></section>
               <section class="buffer"></section>
            </div>

            <!-- Center Left -->
            <div class="panel has-content" data-x-pos="-1" data-y-pos="0">
               <sectionHeader post-title="Writing" class-name="blog" canvas="./animations/blogcanvas"></sectionHeader>
               <section class="block copy">
                  <!-- <blog-item post-title="test"> -->
               </section>
            </div>

            <!-- Bottom Left -->
            <div class="panel has-content" data-x-pos="-1" data-y-pos="-1">
               <sectionHeader post-title="Contact" class-name="contact" canvas="./animations/contactcanvas"></sectionHeader>
            </div>

            <!-- Center Right -->
            <div class="panel has-content" data-x-pos="1" data-y-pos="0">
               <sectionHeader post-title="Non-Profit Work" class-name="nonprofit" canvas="./animations/nonprofitcanvas"></sectionHeader>
            </div>

            <!-- Bottom Center -->
            <div class="panel has-content" data-x-pos="0" data-y-pos="-1">
               <sectionHeader post-title="Activity" class-name="activity" canvas="./animations/activitycanvas"></sectionHeader>
            </div>

            <!-- Bottom Right -->
            <div class="panel has-content" data-x-pos="1" data-y-pos="-1">
               <sectionHeader post-title="For-Fun" class-name="for-fun" canvas="./animations/baebotcanvas"></sectionHeader>
            </div>
         </div>
   </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import sectionHeader from '~/components/SectionHeader.vue'
import heading2 from '~/components/headings/heading2.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'

export default {
   components: {
      Logo,
      HamburgerMenu,
      sectionHeader,
      heading2
   }
}

if(process.client){
const TAU = Zdog.TAU;

const offWhite = '#FED';
const gold = '#F29B9B';
const garnet = '#22B7F2';
const eggplant = '#0476D9';

var illo = new Zdog.Illustration({
   element: '.intro-canvas',
   zoom: 15,
   //rotate: { y: -TAU/8 },
   dragRotate: true,
});

// ----- model ----- //

var hipX = 3;
// hips
var hips = new Zdog.Shape({
   addTo: illo,
   path: [ { x: -hipX }, { x: hipX } ],
   translate: { y: 2 },
   stroke: 4,
   color: eggplant,
});

// ----- legs ----- //

var leg = new Zdog.Shape({
   addTo: hips,
   path: [ { y: 0 }, { y: 12 } ],
   translate: { x: -hipX },
   rotate: { x: TAU/4 },
   color: eggplant,
   stroke: 4,
});

// foot
var foot = new Zdog.RoundedRect({
   addTo: leg,
   width: 2,
   height: 4,
   cornerRadius: 1,
   translate: { y: 14, z: 2 },
   rotate: { x: TAU/4 },
   color: garnet,
   fill: true,
   stroke: 4,
});

var standLeg = leg.copy({
   translate: { x: hipX },
   rotate: { x: -TAU/8 },
});

foot.copy({
   addTo: standLeg,
   rotate: { x: -TAU/8 },
});

// ----- upper body ----- //

var spine = new Zdog.Anchor({
   addTo: hips,
   rotate: { x: TAU/8 },
});

var chest = new Zdog.Shape({
   addTo: spine,
   path: [ { x: -1.5 }, { x: 1.5 } ],
   translate: { y: -6.5 },
   stroke: 9,
   color: garnet,
});

var head = new Zdog.Shape({
   addTo: chest,
   stroke: 12,
   translate: { y: -9.5 },
   color: gold,
});

// var hat = new Zdog.Hemisphere({
//    addTo: illo,
//    diameter: 12,
//    stroke: false,
//    color: eggplant,
//    backface: garnet,
//    translate: { y: -10, z: -13},
//    rotate: {x:2.8}
// });

var eye = new Zdog.Ellipse({
   addTo: head,
   diameter: 2,
   quarters: 2,
   translate: { x: -2, y: 1, z: 4.5 },
   rotate: { z: -TAU/4 },
   color: eggplant,
   stroke: 0.5,
   backface: false,
});

eye.copy({
   translate: { x: 2, y: 1, z: 4.5 },
});

// right eye glass
eye.copy({
   diameter: 3,
   quarters: 4,
   translate: {x:-2, y:1, z:6},
   color: '#fff'
});

eye.copy({
   diameter: 3,
   quarters: 4,
   translate: {x:2, y:1, z:6},
   color: '#fff'
});

eye.copy({
   diameter: 2,
   quarters: 2,
   translate: {x:0, y:1, z:6},
   color: '#fff',
   scale: {x:1, y: 0.5}
})

// smile
var smile = new Zdog.Ellipse({
   addTo: head,
   diameter: 3,
   quarters: 2,
   translate: { y: 3.5, z: 4.5 },
   rotate: { z: TAU/4 },
   closed: true,
   color: '#FED',
   stroke: 0.5,
   fill: true,
   backface: false,
});

//---- mustache hehe ---- //
smile.copy({
   translate: { y: 2.75, z: 4.7 },
   rotate: {z: -33},
   diameter: 5,
   scale: { x: 0.5, y: 1.2 },
   color: '#F2AE30'
});

// ----- arms ----- //

var armSize = 6;

// arm on left
var upperArm = new Zdog.Shape({
   addTo: chest,
   path: [ { y: 0 }, { y: armSize } ],
   translate: { x: -5, y: -2 },
   rotate: { x: -TAU/4 },
   color: eggplant,
   stroke: 4,
});

var forearm = new Zdog.Shape({
   addTo: upperArm,
   path: [ { y: 0 }, { y: armSize } ],
   translate: { y: armSize },
   rotate: { x: TAU/8 },
   color: gold,
   stroke: 4,
});

// hand
new Zdog.Shape({
   addTo: forearm,
   translate: { z: 1, y: armSize },
   stroke: 6,
   color: gold,
});

// arm on right
upperArm.copyGraph({
   translate: { x: 5, y: -2 },
   rotate: { x: TAU/4 },
});

function animate() {
   illo.rotate.y += 0.03;
   illo.updateRenderGraph();
   requestAnimationFrame( animate );
}
animate();
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,700,900&display=swap');

@keyframes digits{
   0%{
      transform:translateX(-50%);
   }
   50%{
      transform:translateX(0%);
   }
   100%{
      transform:translateX(-50%);
   }
}

@keyframes digitsReverse{
   0%{
      transform:translateX(0%);
   }
   50%{
      transform:translateX(-50%);
   }
   100%{
      transform:translateX(0%);
   }
}

@keyframes window1{
   0%{
      top:0%;
      left:0%;
   }
   12.5%{
      top:calc(50% - 17vw);
      left:calc(100% - 27vw);
   }
   25%{
      top:calc(100% - 17vw);
      left: calc(80% - 27vw);
   }
   37.5%{
      top:calc(66% - 17vw);
      left:0px;
   }
   49.5%{
      top:0%;
      left:calc(100% - 27vw);
   }
   62.5%{
      top:calc(50% - 17vw);
      left:0px;
   }
   74.5%{
      top:calc(100% - 17vw);
      left:calc(100% - 27vw);
   }
   86.5%{
      top:calc(66% - 17vw);
      left:calc(80% - 27vw);
   }
   100%{
      top:0%;
      left:0%;
   }
}

canvas{
   cursor:grab;
   &:active:hover{
      cursor:grabbing;
   }
}

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

section.buffer{
   height:600px;
}

.heading{
   text-shadow: 0.5vw 0.5vw 0vw #000;
   margin-bottom:0.66em;
   letter-spacing:-0.01em;
   color:$light;
   transition:all 0.3s ease-in-out;
   position:relative;
   &::selection{
      text-shadow: 0.5vw 0.5vw 0vw $secondary;
      z-index:-1;
   }
}

section.buffer{
   height:100vh;
}

// intro design
.intro-design{
   div.code{
      background-color:$primaryDark;
      position:relative;
      span.disclaimer{
         position:absolute;
         bottom:0.5em;
         left:0.5em;
         color:$light;
         font-size:1em;
      }
      div.row{
         display:block;
         flex-wrap:wrap;
         margin-bottom:0px;
         line-height:1;
         overflow:hidden;
         &:before{
            margin-bottom:-0.1em;
         }
         &:after,
         &:before{
            display:block;
            width:100vw;
            line-height:1;
            // what does this translate to lmao
            content:"01100100 01100101 01100001 01110100 01101000 01101001 01110011 01100011 01100101 01110010 01110100 01100001 01101001 01101110";
            font-family:monospace;
            white-space:nowrap;
            font-size:5vh;
            font-weight:700;
            color:$primaryLight;
            animation:digits 30s linear infinite;
         }
         &:after{
            position:relative;
            top:0.5vh;
            animation:digitsReverse 30s linear infinite;
         }
         &.entertained{
            &:before,
            &:after{
               content:"01101100 01101001 01100110 01100101 01101001 01110011 01101110 01101111 01110100";
            }
         }
      }
   }
   div.design{
      background-color:$secondary;
      position:relative;
      div.window{
         width:27vw;
         height:17vw;
         background-color:#FFF8E1;
         border-radius:1.5vw;
         position:relative;
         animation:window1 15s linear infinite;
         box-shadow:0 1vw 1vw darken($secondary,8%);
         overflow:hidden;
         &:before{
            content:"";
            display:block;
            height:4vw;
            width:100%;
            background-color:lighten($secondary,20%);
            position:absolute;
            top:0px;
            left:0px;
         }
         div{
            background-color:#FFAB91;
            display:block;
            height:1.5vw;
            width:1.5vw;
            position:absolute;
            top:1.25vw;
            left:1.25vw;
            border-radius:50%;
            cursor:pointer;
         }
      }
   }
}

// panel work
body{
   overflow: hidden;
   perspective: 1000px;
}

.site-wrap {
   transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
   width: 100vw;
   height:100vh;
   overflow:hidden;
   transform:translateZ(0);
}
.site-wrap.show-all {
   transform: rotateY(0deg) rotateX(0deg) scale(0.25) translateX(12vw) translateZ(0);
   overflow:visible;
   transition:all 0.3s linear;
   .panel-wrap{
      transform: translateX(0%) translateY(0%) !important;
   }
   .panel{
      cursor:pointer;
      transform:scale(0.975, 0.95);
   }
   h2.heading{
      transform:scale(1.5) translate(-50%, -50%) rotate($rotate);
   }
}

.panel-wrap {
   height: 100vh;
   width: 100vw;
}

.panel-wrap {
   perspective: 2000px;
   transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.panel-wrap.animate--shrink,
.panel-wrap.animate--tilt,
.panel-wrap.animate--tilt2 {
   transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1) 0.3s;
}
.panel {
   height: 100vh;
   position: absolute;
   transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
   width: 100vw;
   will-change: transform;
   background-color:$light;
   overflow-y:scroll;
   overflow-x:hidden;
}

.panel.intro{
   overflow-y:hidden;
   section.intro{
      height:100%;
   }
}

.panel:before {
   background-color: transparent;
   bottom: 0;
   content: "";
   left: 0;
   pointer-events: none;
   position: absolute;
   right: 0;
   top: 0;
   transition: background-color 0.3s cubic-bezier(0.55, 0, 0.1, 1);
   z-index: 2;
}
.show-all .panel{
   overflow:hidden;
}
.show-all .panel:before {
   pointer-events: all;
}
.show-all .panel:hover {
   transform:scale(1.05);
   z-index:2;
   box-shadow:0px 0px 4vw 4vh rgba(#000,0.2);
}
.animate--shrink.animate .panel {
   transform: scale(0.9);
}
.animate--tilt.animate .panel {
   transform: scale(0.6) rotateY(-25deg);
}
.animate--tilt2.animate .panel {
   transform: scale(0.8) rotateX(25deg);
}

.panel[data-x-pos="-2"] {
   left: -200%;
}
.panel[data-x-pos="-1"] {
   left: -100%;
}
.panel[data-x-pos="1"] {
   left: 100%;
}
.panel[data-x-pos="2"] {
   left: 200%;
}
.panel[data-y-pos="-2"] {
   top: 200%;
}
.panel[data-y-pos="-1"] {
   top: 100%;
}
.panel[data-y-pos="1"] {
   top: -100%;
}
.panel[data-y-pos="2"] {
   top: -200%;
}
.panel__zoom {
   user-select: none;
}
.panel__zoom:hover {
   opacity: 1;
}
.show-all .panel__zoom {
   pointer-events: none;
}

section.block{
   max-width:800px;
   padding:2em;
   margin:0 auto;
}

section.intro + section{
   padding-top:4em;
}
</style>
