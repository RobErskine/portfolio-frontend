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
            // Made with Zdog

            const TAU = Zdog.TAU;

            let probonoIllo = new Zdog.Illustration({
                element: '.nonprofit-canvas',
                dragRotate: true,
                rotate: {x: TAU / 30}
            });

            var logoGroup = new Zdog.Group({
                addTo: probonoIllo,
            });

            let circle1 = new Zdog.Ellipse({
                addTo: logoGroup,
                diameter: 450,
                stroke: 25,
                color: '#00be7e',
            });

            circle1.copy({
                rotate: {x: TAU / 4}
            });

            circle1.copy({
                rotate: {x: TAU / 4},
                translate: {y: -100},
                diameter: 400
            })

            circle1.copy({
                rotate: {x: TAU / 4},
                translate: {y: 100},
                diameter: 400
            })

            circle1.copy({
                rotate: {y: TAU / 4}
            });

            circle1.copy({
                rotate: {y: TAU / 8}
            })

            circle1.copy({
                rotate: {y: -TAU / 8}
            })

            function animate() {
                probonoIllo.rotate.x += 0.01;
                probonoIllo.rotate.y += 0.01;
                probonoIllo.updateRenderGraph();
                requestAnimationFrame( animate );
            }

            animate();
        }
    }
</script>