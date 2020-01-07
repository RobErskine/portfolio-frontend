<template>
    <div>
        <canvas class="resume-canvas" width="960" height="960"></canvas>
    </div>
</template>

<script>
    export default{
        mounted: function(){
            const TAU = Zdog.TAU;

            let resumeIllo = new Zdog.Illustration({
                element: '.resume-canvas',
                dragRotate: true,
                rotate: {y: -TAU/14, x: -TAU/30},
                scale: 0.75
            });

            function animate() {
                resumeIllo.updateRenderGraph();
                requestAnimationFrame( animate );
            }

            animate();
        }
    }
</script>