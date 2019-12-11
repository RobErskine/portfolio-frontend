<template>
    <div class="panel has-content" data-x-pos="0" data-y-pos="0">
        <HamburgerMenu />

        <sectionHeader post-title="About Me" class-name="about" canvas="./animations/aboutcanvas"></sectionHeader>
        <div class="about-page">
            <section class="block">
                <div class="block block-width copy">
                    <nav class="toggle-nav">
                        <ul>
                            <li v-for="(item,index) in entries[0].toggleList">
                                <!-- :class="{ 'activ' : letter == selectedLetter}" -->
                                <a href="#" class="button tertiary">{{index}} - {{item.toggleTitle}}</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="biographies">
                        <div v-for="item in entries[0].biography">
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
section.block{
    padding:2em 1em 1em;
}

@media all and (min-width: 700px){
    section.block{
        padding:4vw 2em;
    }
}

div.block-width{
    max-width: 1200px;
    margin:0 auto;
}

figure{
    border-radius:1.5em 3em;
    overflow:hidden;
}

pre{
    white-space:pre-line;
    color:#fff;
    background-color:#333;
    padding:1em;
    border-radius:1.5em 3em;
    width:calc(100% + 2em);
    margin-left:-1em;
}

@media all and (min-width:700px){
    pre{
        width:100%;
        margin-left:auto;
    }
}

p,pre{
    margin-bottom:1.2em;
    font-size:1.2em;
    line-height:1.375;
}

@media all and (min-width: 700px){
    p,pre{
        font-size:1.5em;
    }
}

p,pre{
    a{
        color:inherit;
        text-decoration:none;
        background-size:  100% 10%;
        background-repeat: repeat-x;
        background-position: left 0% bottom 5%;
        background-image: linear-gradient(110deg, $primary 0%, $secondary 50%);
        transition:all 0.25s ease-in-out;
        overflow:visible;
        &:hover{
            background-size:  120% 100%;
            color:#fff;
        }
    }
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

// query
import page from '~/queries/about/index.gql';

export default {
    components: {
        HamburgerMenu,
        sectionHeader,
    },
    apollo: {
        entries: {
            query: page,
            variables: {
                "section": "about",
            }
        }
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