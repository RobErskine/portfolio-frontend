<template>
    <div>
        <canvas class="nonprofit-canvas" width="960" height="960"></canvas>
    </div>
</template>

<style lang="scss">
section.intro.nonprofit{
    background-color:#e6fbff;
}
</style>

<script>
    export default{
        mounted: function(){
            const TAU = Zdog.TAU;

            let nonprofitIllo = new Zdog.Illustration({
                element: '.nonprofit-canvas',
                dragRotate: true,
                rotate: {y: -TAU/14, x: -TAU/30},
                scale: 0.75
            });

            function animate() {
                nonprofitIllo.updateRenderGraph();
                requestAnimationFrame( animate );
            }

            animate();
        }
    }
</script>