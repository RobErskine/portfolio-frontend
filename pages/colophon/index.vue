<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <Logo size="size-small" position="position-left"/>
        <section class="intro section-intro colophon">
            <heading2 post-title="Colophon"></heading2>
            <canvas class="colophon-canvas" width="960" height="960"></canvas>
        </section>
        <section class="block copy">
            <div class="block" style="max-width:70ch;">
                <p>This site was designed entirely in the browser, no traditional design tools needed. Written in VS Code using <a target="_blank" href="https://nuxtjs.org">Nuxt</a>, Vue, Sass, Webpack, and and Babel tasks for compilation and deployment to <a target="_blank" href="https://netlify.com">Netlify</a>. JAMstack powered by <a target="_blank" href="https://craftcms.com">Craft CMS</a>, GraphQL, and Axios. Version controlled on <a href="https://github.com/RobErskine/portfolio-frontend/" target="_blank" title="visit my portfolio code on GitHub">GitHub</a>. The typeface all around is <a target="_blank" href="https://fonts.adobe.com/fonts/filson">Filson Pro</a>. <a href="https://zzz.dog" target="_blank">Z Dog</a> was heavily used throughout for all of the 3D animations.</p> 
                <p>Countless <a title="Link to my latest homebrew on Twitter" target="_blank" href="https://twitter.com/ErskineRob/status/1212114179290730496">beers</a> and hours of <a target="_blank" href="https://twitter.com/ErskineRob/status/1156762012535406592">Phillies Baseball</a> on in the background were consumed during the development of this website.</p>
                <p>Want to build something together? <nuxt-link to="/contact">Hit me up</nuxt-link>.</p>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<style lang="scss">
    section.intro.colophon{
        background-color:#e6fbff;
    }
</style>

<script>
import Logo from '~/components/Logo.vue';
import sectionHeader from '~/components/SectionHeader.vue';
import heading2 from '~/components/headings/heading2';
import Footer from '~/components/Footer';

//mixins
import everypage from '~/mixins/everypage';
    
export default{
    components: {
        Logo,
        sectionHeader,
        heading2,
        Footer
    },
    data (){
        return {
            title: 'Colophon | Rob Erskine - Creative Developer',
            description: 'How was this site built? What was it built with? I\'ll tell you!',
            image: 'https://storage.googleapis.com/robs_portfolio/seo/colophon.jpg'
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
        everypage.externalLinks();
    
        const TAU = Zdog.TAU;

        const offWhite = '#FED';
        const gold = '#F29B9B';
        const garnet = '#22B7F2';
        const eggplant = '#0476D9';

        everypage.setColors(eggplant, garnet);

        var illo = new Zdog.Illustration({
            element: '.colophon-canvas',
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
            rotate: { z: -TAU/4, x: TAU / 10 },
            color: eggplant,
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
            translate: { y: -0.25, z: 3.25 },
            rotate: { z: 33 , x: TAU/9},
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
            illo.rotate.x -= 0.01;
            if (illo.rotate.x < -0.08){
                shaking = false;
            }
        }

        if( shaking === false){
            illo.rotate.x += 0.01;
            if (illo.rotate.x > 0.70){
                shaking = true;
            }
        }
        
        //illo.rotate.x -= 0.0005;
        illo.updateRenderGraph();
        requestAnimationFrame( animate );
    }

    animate();
    },
    destroyed (){
        everypage.setColors('#fff', '#333');
    }
}
</script>