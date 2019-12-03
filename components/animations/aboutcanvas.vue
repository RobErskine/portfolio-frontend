<template>
    <div>
        <canvas class="about-canvas" width="960" height="960"></canvas>
    </div>
</template>

<script>
if(process.client){
const TAU = Zdog.TAU;

let aboutIllo = new Zdog.Illustration({
    element: '.about-canvas',
    dragRotate: true,
    rotate: {y: -TAU/14, x: -TAU/30},
    scale: 0.75
});

function animate() {
    aboutIllo.updateRenderGraph();
    requestAnimationFrame( animate );
}

animate();
}
</script>