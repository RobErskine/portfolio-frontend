<template>
    <div>
        <canvas class="contact-canvas" width="960" height="960"></canvas>
    </div>
</template>

<script>
export default{
    mounted: function(){
        const TAU = Zdog.TAU;
        let contactIllo = new Zdog.Illustration({
            element: '.contact-canvas',
            dragRotate: true,
            rotate: {y: -TAU/14, x: -TAU/30},
            scale: 0.75
        });

        var flagGroup = new Zdog.Group({
            addTo: contactIllo,
            dragRotate: true
        });

        var mailboxGroup = new Zdog.Group({
            addTo: contactIllo,
            //rotate: {y:21.5, z:0, x:-0.2}
        });

        var envelopeGroup = new Zdog.Group({
            addTo: contactIllo
        });

        let envelope = new Zdog.Box({
            addTo: envelopeGroup,
            width: 200,
            height:120,
            depth: 20,
            color: '#f3f3f3',
            translate: {y:-500, z:0, x: -200},
            rotate: {x: TAU/22, y: TAU/10}
        });

        let envelopeCrease = new Zdog.Shape({
            addTo: envelope,
            path: [
            { x:   80, y: -40 },
            { x:  0, y:  10 },
            { x: -80, y:  -40 },
            ],
            translate:{y:0, z:20, x:0},
            closed: false,
            stroke: 10,
            color: '#d1d1d1',
            backface: false
        });

        envelope.copyGraph({
            translate: {y:100, z:-300, x: 300},
            rotate: {x: TAU/10, y: TAU/22}
        });

        envelope.copyGraph({
            translate: {y: -100, z: -300, x: -200},
            rotate: {y:TAU/2}
        });

        envelope.copyGraph({
            translate: {y: -200, x: 250, z: -200},
            rotate: {y: TAU/6}
        });

        let flagBody = new Zdog.Rect({
            addTo: flagGroup,
            height:20,
            width:150,
            color: '#ff0000',
            stroke: 20,
            //rotate: {y:23, z:0, x:-0.2},
            translate: {x:-100,y:-150, z:40},
            rotate: {y:TAU/4 }
        });

        let flagTop = new Zdog.Rect({
            addTo: flagGroup,
            height:20,
            width:30,
            color: '#ff0000',
            stroke: 20,
            translate: {x:-100, y:-120, z:-20},
            rotate:{y: TAU /4}
        });

        let boxTop = new Zdog.Cylinder({
            addTo: mailboxGroup,
            diameter: 150,
            length: 400,
            translate: { y: -210},
            stroke: true,
            // turn to face left
            //rotate: { x: TAU/3 , y: TAU/6},
            color: '#d4d4d4'
        });

        let boxBottom = new Zdog.Box({
            addTo: mailboxGroup,
            depth:395,
            height:150,
            width: 150,
            color:'#d4d4d4',
            translate: {y: -140},
            //rotate: { x: TAU/3 , y: TAU/6, z: -20},
        });

        let pole = new Zdog.Box({
            addTo: contactIllo,
            depth: 40,
            height:500,
            width: 40,
            color: '#5c2600',
            translate:{y:190, z:-30},
            rotate:{y: 2}
        });

        var flagUp = false;
        function animate() {
            envelopeGroup.rotate.y += 0.01;

            contactIllo.updateRenderGraph();
            requestAnimationFrame( animate );

            //flagGroup.translate.y -= 0.2;
            //flagGroup.rotate.x -= 0.03;  

            if( flagUp === true){
                flagGroup.translate.y += 1.8;
                flagGroup.rotate.x += 0.01;
                if (flagGroup.rotate.x > 0){
                    flagUp = false;
                }
            }

            if( flagUp === false){
                flagGroup.translate.y -= 1.8;
                flagGroup.rotate.x -= 0.01;
                if (flagGroup.rotate.x < -1.5){
                    flagUp = true;
                }
            }
        }

        animate();
    }
}
</script>