<template>
    <div>
        <canvas class="about-canvas" width="960" height="960"></canvas>
    </div>
</template>

<style lang="scss">
section.section-intro.about{
    background-color:#c4aaf6;
}
</style>

<script>

export default{
    mounted: function(){
        // Made with Zdog
        const TAU = Zdog.TAU;

        let aboutIllo = new Zdog.Illustration({
            element: '.about-canvas',
            dragRotate: true,
            rotate: {z: TAU / 4, y: -TAU / 50}
        });

        let board = new Zdog.Shape({
            addTo: aboutIllo,
            closed: true,
            fill: true,
            stroke: 40,
            color: '#977EF2',
            backface: '#333',
            translate: {z: -40},
            path: [
                {x: 0, y: -400},
                {arc: [
                {x: 150, y: -400},
                {x: 150, y: -250},
                ]},
                {x: 150, y: 250},
                {arc: [
                {x: 150, y: 400},
                {x: 0, y: 400}
                ]},
                {x: 0, y: 400},
                {arc: [
                {x:-150, y: 400},
                {x: -150, y: 250}
                ]},
                {x: -150, y: -250},
                {arc: [
                {x: -150, y: -400},
                {x: 0, y: -400}
                ]}
            ]
        });

        let truck1 = new Zdog.Cylinder({
            addTo: aboutIllo,
            diameter: 30,
            length: 180,
            stroke: false,
            color: '#e3e2e2',
            backface: '#e3e2e2',
            rotate: {y: TAU / 4},
            translate: {z: 80, y: -180}
        });

        let wheel1 = new Zdog.Cylinder({
            addTo: aboutIllo,
            diameter: 90,
            length: 60,
            color: '#ff904f',
            backface: '#F24C3D',
            translate: {z: 80, y: -180, x: -130},
            rotate: {y: TAU / 4},
        });

        wheel1.copy({
            translate: {z: 80, y: -180, x: 130},
        })

        truck1.copy({
            translate: {z: 80, y: 180}
        });

        wheel1.copy({
            translate: {z: 80, y: 180, x: 130},
        })

        wheel1.copy({
            translate: {z: 80, y: 180, x: -130},
        })

        let isSpinning = true;

        function animate() {
            aboutIllo.rotate.x += isSpinning ? 0.045 : 0;
            //aboutIllo.rotate.y += isSpinning ? 0.01 : 0;
            aboutIllo.updateRenderGraph();
            requestAnimationFrame( animate );
        }
        animate();
    }
}
</script>