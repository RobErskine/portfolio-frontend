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
                                <a href="#" class="button tertiary">{{item.toggleTitle}}</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="biographies">
                        <div v-for="item in entries[0].toggleList">
                            <div style="display:none;" v-html="item.toggleText"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="about-me">
                <figure>
                    <img src="~/assets/images/rob-erskine-is-cute.png" alt="Wow Rob Erskine is cute." class="foreground">
                    <img src="~/assets/images/fenway-park.jpg" alt="" class="background">
                </figure>
                <figcaption>
                    <span>Me, having the best time, watching the Boston Red Sox lose. <em>(I am a hardcore Philadelhpia Phillies phan)</em></span>
                </figcaption>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
figure{
    border-radius:1.5em 3em;
    overflow:hidden;
}

div.about-me{
    background-size:cover;
    overflow:visible;
    padding:1.5em 3em;
    position:relative;
    max-width:100%;
    width:100%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: perspective(300px); 
    -webkit-perspective: 300;
    border-radius:1.5em 3em;
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
        transform: translateZ(80px) translateY(-15px) translateX(-50px) scale(0.625);
        border-radius:1.5em 3em;
    }
}

@media all and (min-width: 900px){
    div.about-page{
        position:relative;
        width:100%;
        display:flex;
        overflow-y:hidden;
        section.block{
            width:100%;
            max-width:100%;
            position:relative;
            display:flex;
        }
        div.copy{
            width:90%;
            margin:0 auto;
            padding-right:30%;
            max-width:100%;
        }
        div.about-me{
            flex: 0 1 0px;
            float:right;
            position:absolute;
            top:11em;
            right:0px;
            width:30%;
        }
    }
}
</style>

<script>
// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import customButton from '~/components/customButton.vue'

// query
import page from '~/queries/about/index.gql';

export default {
    data(){
        return {
            entries:{}
        }
    },
    components: {
        HamburgerMenu,
        sectionHeader,
        customButton
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
        $('div.about-me').each(function(){
            $(this).tilt({
                maxTilt: 10
            });
        });
    }
}

if(process.client){
    $('div.about-me').each(function(){
        $(this).tilt({
            maxTilt: 10
        });
    });
}
</script>