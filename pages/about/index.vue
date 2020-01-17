<template>
    <div class="panel has-content detail" data-x-pos="0" data-y-pos="0">
        <sectionHeader post-title="About Me" class-name="about" canvas="./animations/aboutcanvas"></sectionHeader>
        <div class="about-page">
            <section class="block">
                <div class="block block-width copy" v-if="entries[0]">
                    <nav class="toggle-nav">
                        <ul>
                            <li v-for="(item,index) in entries[0].toggleList">
                                <!-- :class="{ 'activ' : letter == selectedLetter}" -->
                                <button v-bind:class="{'active':(index===1)}" class="button tertiary">{{item.toggleTitle}}</button>
                            </li>
                        </ul>
                    </nav>
                    <div class="biographies">
                        <div v-for="(item, index) in entries[0].toggleList" v-bind:class="{'active':(index===1)}" v-html="item.toggleText"></div>
                    </div>
                </div>
            </section>
            <div class="about-me">
                <figure>
                    <img src="~/assets/images/rob-erskine-is-cute.png" alt="Wow Rob Erskine is cute." class="foreground">
                    <img src="~/assets/images/fenway-park.jpg" alt="" class="background">
                </figure>
                <figcaption>
                    <span>Me, having the best time, watching the Boston Red Sox lose <em>(I am a hardcore  Phillies phan)</em>.</span>
                </figcaption>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style lang="scss">

nav.toggle-nav{
    margin-bottom:2em;
    li{
        display:inline-block;
    }
    button{
        font-size:1em;
        border:0px;
        font-weight:700;
        margin: 1em 2em 1em 0px;
        transform:rotate(-($rotate));
        &.active{
            transform:rotate($rotate);
            background-color:$primary;
        }
        &:hover{
            background-color:$primary;
        }
    }
}

div.biographies{
    div{
        display:none;
    }
    div.active{
        display:block;
    }
}

figure{
    border-radius:1.5em 3em;
}

div.about-me{
    background-size:cover;
    padding:1.5em 3em;
    position:relative;
    max-width:100%;
    width:100%;
    border-radius:1.5em 3em;
    figure{
        position:relative;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        transform: perspective(300px); 
        -webkit-perspective: 300;
    }
    figure:before{
        content:"";
        display:block;
        padding-top:133.375%;
    }
    img{
        position:absolute;
        bottom:0px;
        right:0px;
        width:100%;
    }
    img.background{
        top:0px;
        left:0px;
        z-index:1;
        border-radius:1.5em 3em;
    }
    img.foreground{
        width:80%;
        z-index:2;
        transform: translateZ(80px) translateY(-15px) translateX(-20px) scale(0.625);
        border-radius:1.5em 3em;
    }
    figcaption{
        padding-top:5em;
    }
}

@media all and (min-width: 900px){
    div.about-page{
        position:relative;
        display:flex;
        overflow:hidden;
        width:100%;
        max-width:$max-width;
        margin:0 auto;
        section.block{
            width:100%;
            max-width:100%;
            position:relative;
            display:flex;
        }
        div.copy{
            width:100%;
        }
        div.about-me{
            width:30%;
            padding:5em 0px 1em;
        }
    }
}
</style>

<script>
// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import customButton from '~/components/customButton.vue'
import Footer from '~/components/Footer.vue'

// query
import page from '~/queries/about/index.gql';

export default {
    data(){
        return {
            entries:{},
            title: 'About | Rob Erskine - Creative Developer',
            description: 'Rob Erskine is a creative designer and developer obsessed with solving complex problems in collaborative environments',
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
    components: {
        HamburgerMenu,
        sectionHeader,
        customButton,
        Footer
    },
    apollo: {
        entries: {
            query: page,
            variables: {
                "section": "about",
            }
        }
    },
    mounted: function(){
        // about me tilt
        $('div.about-me figure').each(function(){
            $(this).tilt({
                maxTilt: 10
            });
        });

        // toggle for about lengths
        $('body').on('click','nav.toggle-nav li', function(event){
            var position = ($(this).index()) + 1;
            $('nav.toggle-nav button').each( function(){ $(this).removeClass('active') });
            $('div.biographies div').each( function(){ $(this).removeClass('active')});
            $(this).find('button').addClass('active');
            $('div.biographies div:nth-child('+position+')').addClass('active');
        });
    }
}
</script>