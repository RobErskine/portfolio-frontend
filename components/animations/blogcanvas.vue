<template>
    <div>
        <canvas class="blog-canvas" width="960" height="960"></canvas>
    </div>
</template>

<script>
    export default{
        mounted: function(){
            const TAU = Zdog.TAU;

            let blogIllo = new Zdog.Illustration({
                element: '.blog-canvas',
                dragRotate: true
            });

            let woodGroup = new Zdog.Group({
                addTo: blogIllo
            });

            let erasorGroup = new Zdog.Group({
                addTo: blogIllo,
                translate: {z: -325}
            });

            let metal = new Zdog.Cylinder({
                addTo:erasorGroup,
                length:50,
                diameter: 80,
                color: '#CFD8DC'
            });

            let erasor = new Zdog.Cylinder({
                addTo:erasorGroup,
                length:80,
                diameter: 80,
                color: '#ff364e',
                translate: {z: -50}
            })

            let pole = new Zdog.Cylinder({
                addTo: blogIllo,
                length:600,
                diameter: 80,
                color: '#ffd665',
                translate:{z:0},
            });

            let wood = new Zdog.Cone({
                addTo: woodGroup,
                diameter: 80,
                length: 150,
                stroke: false,
                color: '#D7CCC8',
                translate: {z:300},
            });

            let graphite = new Zdog.Cone({
                addTo: woodGroup,
                diameter: 25,
                length:45,
                stroke: false,
                color: '#333',
                translate: {z:400}
            });

            function animate() {
                blogIllo.rotate.x += 0.01;
                blogIllo.rotate.y += 0.01;

                blogIllo.updateRenderGraph();
                requestAnimationFrame( animate );
            }
            animate();
        }
    }
</script>