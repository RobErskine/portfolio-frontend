<template>
    <div>
        <canvas class="activity-canvas" width="960" height="960"></canvas>
    </div>
</template>

<script>
if(process.client){
const TAU = Zdog.TAU;

let activityIllo = new Zdog.Illustration({
    element: '.activity-canvas',
    dragRotate: true,
    rotate: {y: -TAU/14, x: -TAU/30},
    scale: 0.75
});

function animate() {
    activityIllo.updateRenderGraph();
    requestAnimationFrame( animate );
}

animate();
}
</script>