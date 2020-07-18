<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <section class="intro section-intro fourohfour">
            <heading2 post-title="four oh four"></heading2>
            <canvas class="fourohfour-canvas" width="960" height="960"></canvas>
        </section>
        <section class="block copy text-align-center">
            <div class="block copy block-width copy">
                <h1>Ah shoot. The page you requested could not be found.</h1>
                <p style="padding-top:1em; max-width: 800px; margin:0 auto;">Sorry about that. Why not bounce back to the <a href="/">homepage</a>, check out <a href="/resume">my resume</a>, or visit <a href="/contact">my contact page</a> to tell me about your error.</p>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<style lang="scss">
    section.intro.fourohfour{
        background-color:#e6fbff;
    }
</style>

<script>
import Logo from '~/components/Logo.vue';
import sectionHeader from '~/components/SectionHeader.vue';
import heading2 from '~/components/headings/heading2';
import Footer from '~/components/Footer';
    
export default{
    components: {
        Logo,
        sectionHeader,
        heading2,
        Footer
    },
    data (){
        return {
            title: 'Not Found :( | Rob Erskine - Creative Developer',
            description: 'Unfortunately the page you requests was not found. I am sorry. So sorry.',
            image: 'https://placehold.it/1200x630?text=TODO'
        }
    },
    head (){
        return {
            title: this.title,
            meta: [
                { hid: 'og:title', name: 'og:title', content:this.title },
                { hid: 'twitter:title', name: 'twitter:title', content:this.title },
                { hid: 'description', name: 'description', content: this.description },
                { hid: 'og:description', name: 'og:description', content: this.description },
                { hid: 'og:image', name: 'og:image', content: this.image },
                { hid: 'twitter:image', name: 'og:image', content: this.image }
            ]
        }
    },
    mounted: function(){
        const TAU = Zdog.TAU;

        const offWhite = '#FED';
        const gold = '#F29B9B';
        const garnet = '#22B7F2';
        const eggplant = '#0476D9';

        var illo = new Zdog.Illustration({
            element: '.fourohfour-canvas',
            zoom: 40,
            //rotate: { y: -TAU/8 },
            rotate: {x: TAU / 14},
            dragRotate: true,
        });

        // ----- model ----- //

        var head = new Zdog.Hemisphere({
            addTo: illo,
            diameter: 12,
            false: 12,
            translate: { y: 0 },
            rotate: {x: -TAU/6},
            color: gold,
        });

        head.copy({
            rotate: {x: TAU/3 },
            transform: {y:10},
            color:eggplant
        });

        var pompom = new Zdog.Shape({
            addTo: head,
            stroke: 3,
            color: garnet,
            translate: {y:-2, z:-8},
            rotate: {x: TAU/3 }
        })

        var eye = new Zdog.Ellipse({
            addTo: head,
            diameter: 2,
            quarters: 2,
            translate: { x: -2, y: -5.5, z: 4.25 },
            rotate: { z: TAU/4, x: TAU / 10 },
            color: '#333',
            stroke: 0.5,
            backface: false,
        });

        eye.copy({
            translate: { x: 2, y: -5.5, z: 4.25 },
        });

        // right eye glass
        eye.copy({
            diameter: 3,
            quarters: 4,
            translate: {x:-2, y:-6, z:5.25},
            rotate: {x: TAU/9},
            color: '#fff'
        });

        eye.copy({
            diameter: 3,
            quarters: 4,
            translate: {x:2, y:-6, z:5.25},
            rotate: {x: TAU/9},
            color: '#fff'
        });

        eye.copy({
            diameter: 2,
            quarters: 2,
            translate: {x:0, y:-6, z:5.25},
            color: '#fff',
            scale: {x:1, y: 0.5},
            rotate: { z: -TAU/4 },
        })

        // smile
        var smile = new Zdog.Ellipse({
            addTo: head,
            diameter: 3,
            quarters: 2,
            translate: { y: -0.25, z: 5.25 },
            rotate: { z: -33 , x: TAU/9},
            closed: true,
            color: '#f06262',
            stroke: 0.5,
            fill: true,
            backface: false,
        });

        //---- mustache hehe ---- //
        smile.copy({
            translate: { y: -2.55, z: 5.5 },
            rotate: {z: -33, x: TAU/9},
            diameter: 5,
            scale: { x: 0.5, y: 1.2 },
            color: '#F2AE30'
        });

    var shaking = true;
    function animate() {
        if( shaking === true){
            illo.rotate.y -= 0.02;
            if (illo.rotate.y < -0.68){
                shaking = false;
            }
        }

        if( shaking === false){
            illo.rotate.y += 0.02;
            if (illo.rotate.y > 0.68){
                shaking = true;
            }
        }
        
        //illo.rotate.x -= 0.0005;
        illo.updateRenderGraph();
        requestAnimationFrame( animate );
    }

    animate();
    }
}
</script>