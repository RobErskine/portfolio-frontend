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
                rotate: {y: -TAU / 24, x: -TAU / 35}
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
                translate: {y: -250}
            });

            let box = new Zdog.Box({
                addTo: resumeIllo,
                width: 250,
                height: 150,
                depth: 250,
                stroke: 20,
                color: '#cd4527',
                translate: {y: 150}
            });

            let stalk = new Zdog.Cylinder({
                addTo: resumeIllo,
                diameter: 120,
                length: 120,
                stroke: 20,
                color: '#ffbc53',
                rotate: {x: -TAU / 4},
                translate: {y:0}
            });

            var ring = new Zdog.Ellipse({
                addTo: resumeIllo,
                diameter: 120,
                quarters: 2,
                translate: { x: 160, y: -150 },
                rotate: {z: TAU/12},
                color: '#ffbc53',
                stroke: 30,
                backface: true,
            });

            ring.copy({
                translate: { x: -160, y: -150 },
                rotate: {z: 0, z: TAU / 2.5},
            })

            let sparkle = new Zdog.Shape({
            addTo: resumeIllo,
            path: [
                { x: 0, y: 0 },   // start
                { arc: [
                { x:  60, y: 0 }, // corner
                { x:  60, y: 60 }, // end point
                ]},
                { arc: [
                {x: 60, y: 0},
                {x: 120, y: 0}
                ]},
                { arc: [
                {x: 60, y: 0},
                {x: 60, y: -60}
                ]},
                {
                arc: [
                    {x: 60, y:0},
                    {x: 0, y: 0}
                ]
                }
            ],
            closed: true,
            stroke: 20,
            fill: true,
            color: '#fff',
            translate: {y: -215, x: -160, z: 100},
            scale:0.5
            });

            let sparkle2 = sparkle.copy({
            scale: 0.7,
            translate: {y: -120, x: -20, z: 210}
            });

            let sparkle3 = sparkle.copy({
            scale: 0.35,
            translate: {y: 10, x: -120, z: 100}
            });

            let sparkle4 = sparkle.copy({
            scale:0.7,
            translate: {y: -60, x: 20, z: -100}
            });

            // let sparkle5 = sparkle.copy({
            
            // });


            var goingUp1 = true;
            var goingUp2 = false;
            var goingUp3 = true;
            var goingUp4 = false;

            function animate() {
                //resumeIllo.rotate.y += 0.01;
                resumeIllo.updateRenderGraph();
                requestAnimationFrame( animate );
            }

            animate();
        }
    }
</script>