<template>
    <div class="activity-background">
        <canvas class="activity-canvas" width="960" height="960"></canvas>
    </div>
</template>

<style lang="scss">
section.section-intro.activity{
    background-color: #CECECE;
}
</style>

<script>
export default{
    mounted (){
        const TAU = Zdog.TAU;

let alarmIllo = new Zdog.Illustration({
  element: '.activity-canvas',
  dragRotate: true,
  rotate: {x: TAU / 114, y: -TAU / 15},
  scale: 1.2
});

var alarm = new Zdog.Group({
  addTo: alarmIllo
});

// left pillar
let hhcc = new Zdog.Cylinder({
  addTo: alarm,
  diameter: 400,
  length: 150,
  stroke: 10,
  color: '#eb3131',
  frontFace: '#fff',
  backface: '#eb3131',
});

let dome1 = new Zdog.Hemisphere({
  addTo: alarmIllo,
  diameter: 175,
  // fill enabled by default
  // disable stroke for crisp edge
  stroke: false,
  color: '#eb3131',
  backface: '#cf2525',
  translate: {y:-225, x: -115},
  rotate: {x: TAU / 4, y: TAU / 14}
});

dome1.copy({
  translate: {y: -225, x: 115},
  rotate: {x: TAU / 4, y: -TAU/14 }
});

// make this connect to real time?
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

let minute = new Zdog.Shape({
  addTo: alarmIllo,
  path: [
    { x: 0 }, // start at 1st point
    { x:  160 }, // line to 2nd point
  ],
  stroke: 15,
  color: '#333',
  translate: {z: 105},
  rotate: {z: (h * 12)}
});

let hour = new Zdog.Shape({
  addTo: alarmIllo,
  path: [
    { x: 0 }, // start at 1st point
    { x:  120 }, // line to 2nd point
  ],
  stroke: 15,
  color: '#333',
  translate: {z: 105}
});

// let foot = new Zdog.Shape({
//   addTo: alarmIllo,
//   path: [
//     { x: 0 },
//     { x: 80},
//     ],
//   stroke: 30,
//   color: '#b8b8b8',
//   translate: {y: 200, z: -20, x: -80},
//   rotate: {z: TAU / 3}
// });

// foot.copy({
//   translate: {y: 270, z: -20, x: 80},
//   rotate: { z: -TAU / 3}
// })



function animate() {
  // minute.rotate.z += 0.00175;
  // hour.rotate.z += 0.000175;
  
  minute.rotate.z += 0.006;
  hour.rotate.z += 0.001;
  alarmIllo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();
    }
}

</script>