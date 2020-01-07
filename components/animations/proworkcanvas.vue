<template>
    <div>
        <canvas class="prowork-canvas" width="960" height="960"></canvas>
    </div>
</template>

<script>
    export default{
        mounted: function(){
            const TAU = Zdog.TAU;

            // hhcc logo
            var hhccIllo = new Zdog.Illustration({
                element: '.prowork-canvas',
                dragRotate: true,
            });

            var hhGroup = new Zdog.Group({
                addTo: hhccIllo
            });

            let hhcc = new Zdog.Box({
                addTo: hhGroup,
                width: 80,
                depth: 40,
                height: 400,
                stroke: 15,
                translate: { x: -170 },
                // turn to face left
                rotate: { y: TAU },
                color: '#8ec448',
                fill: '8ec448'
            });

            hhcc.copy({
                translate: {x: 170}
            });

            hhcc.copy({
                translate: {x: 0},
                height: 550
            });

            hhcc.copy({
                translate: {x : -90},
                width:90,
                height: 80
            });

            hhcc.copy({
                translate: {x : 90},
                width:90,
                height: 80
            });

            function animate() {
                hhccIllo.rotate.y += 0.03;
                hhccIllo.updateRenderGraph();
                requestAnimationFrame( animate );
            }
            animate();
        }
    }
</script>