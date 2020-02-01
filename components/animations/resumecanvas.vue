<template>
    <div>
        <canvas class="resume-canvas" width="960" height="960"></canvas>
    </div>
</template>

<style lang="scss">
section.resume.intro{
    background-color:#ffea7f;
}
</style>

<script>
    export default{
        mounted: function(){
            const TAU = Zdog.TAU;

            let resumeIllo = new Zdog.Illustration({
                element: '.resume-canvas',
                dragRotate: true,
            });

            let dome = new Zdog.Hemisphere({
            addTo: resumeIllo,
            diameter: 400,
            // fill enabled by default
            // disable stroke for crisp edge
            stroke: false,
            color: '#ffbc53',
            backface: '#f89943',
            rotate: { x: -TAU / 4},
            translate: {y: -300}
            });

            let stalk = new Zdog.Cylinder({
            addTo: resumeIllo,
            diameter: 120,
            length: 150,
            stroke: false,
            color: '#ffbc53',
            rotate: {x: -TAU / 4},
            translate: {y:-50}
            });

            let box = new Zdog.Box({
            addTo: resumeIllo,
            width: 250,
            height: 150,
            depth: 250,
            stroke: 20,
            color: '#cd4527',
            translate: {y: 100}
            });

            var ring = new Zdog.Ellipse({
            addTo: resumeIllo,
            diameter: 120,
            quarters: 2,
            translate: { x: 160, y: -200 },
            rotate: {z: TAU/12},
            color: '#ffbc53',
            stroke: 30,
            backface: false,
            });

            ring.copy({
            translate: { x: -160, y: -200 },
            rotate: {z: 0, z: TAU / 2.5},
            })

            function animate() {
                resumeIllo.updateRenderGraph();
                requestAnimationFrame( animate );
            }

            animate();
        }
    }
</script>