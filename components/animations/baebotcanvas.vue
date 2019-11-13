<template>
    <div>
        <canvas class="baebot-canvas" width="960" height="960"></canvas>
    </div>
</template>

<script>
if(process.client){
const TAU = Zdog.TAU;

// baebot body
let baebotIllo = new Zdog.Illustration({
    element: '.baebot-canvas',
    dragRotate: true,
    rotate: {x: TAU/22}
});

var baebotGroup = new Zdog.Group({
    addTo: baebotIllo
});

var baeArms = new Zdog.Group({
    addTo: baebotIllo
});

var baeFace = new Zdog.Group({
    addTo: baebotIllo
});

// left pillar
let baeHeadTop = new Zdog.Hemisphere({
    addTo: baebotGroup,
    diameter: 200,
    translate: { y: -210},
    stroke: false,
    // turn to face left
    rotate: { x: -TAU/4 , y: TAU/2},
    color: '#dedede',
    backface: '#dedede'
});

let baeBodyUpper = new Zdog.Cylinder({
    addTo: baebotGroup,
    color: '#dedede',
    length:310,
    diameter: 198,
    translate: {y: -55},
    rotate: { x:-TAU/4},
    stroke: 3
});

baeHeadTop.copy({
    translate:{ y:95},
    rotate: {x:-TAU/4}
});

let baeRightArm = new Zdog.Ellipse({
    addTo: baeArms,
    width: 40,
    height: 90,
    stroke: 60,
    color: '#dedede',
    translate: {x:200, y:-60},
    rotate: {z:200}
});

baeRightArm.copy({
    translate: {x:-200, y:-60},
    rotate: {z:-200}
});

let baeBackface = new Zdog.RoundedRect({
    addTo: baeFace,
    width:70,
    height:25,
    cornerRadius:30,
    stroke: 60,
    color: '#444',
    translate: {y:-200,z: 70}
});

let baeEye = new Zdog.Ellipse({
    addTo: baeFace,
    width: 40,
    height: 40,
    color: '#36abff',
    fill: '#36abff',
    translate: {y:-195, z: 100, x:-30}
});

baeEye.copy({
    translate:{y:-195, z:100, x:30}
});

var goingUp = true;
function animate() {
    requestAnimationFrame( animate );

    if( goingUp === true){
        baebotIllo.translate.y -= 1;
        baebotIllo.rotate.y += 0.005;
        if (baebotIllo.translate.y === -100){
            goingUp = false;
        }
    }

    if( goingUp === false){
        baebotIllo.translate.y += 1;
        baebotIllo.rotate.y -= 0.005;
        if (baebotIllo.translate.y === 100){
            goingUp = true;
        }
    }
    baebotIllo.updateRenderGraph();
}
animate();
}
</script>