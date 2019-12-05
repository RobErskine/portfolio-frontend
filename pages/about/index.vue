<template>
    <div class="panel has-content" data-x-pos="-1" data-y-pos="0">
        <HamburgerMenu />

        <sectionHeader post-title="About Me" class-name="about" canvas="./animations/aboutcanvas"></sectionHeader>
        <section class="block copy">
            <div class="block block-width">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div class="about-me">
                    <figure>
                        <img src="~/assets/images/rob-erskine-is-cute.png" alt="Wow Rob Erskine is cute." class="foreground">
                        <img src="~/assets/images/fenway-park.jpg" alt="" class="background">
                    </figure>
                    <figcaption>
                        <span>Me, having the best time, watching the Boston Red Sox lose. (I am a hardcore Philadelhpia Phillies phan)</span>
                    </figcaption>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
section.block{
    padding:4vw 2em;
}

div.block-width{
    max-width: 1200px;
    margin:0 auto;
    overflow:hidden;
}

div.about-me{
    background-size:cover;
    //overflow:hidden;
    padding:1.5em 3em;
    position:relative;
    max-width:40%;
    width:100%;
    float:right;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: perspective(300px); 
    -webkit-perspective: 300;
    &:after{
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
    }
    img.foreground{
        width:90%;
        z-index:2;
        transform: translateZ(80px) translateY(25px) translateX(-25px) scale(0.685);
    }
}
</style>

<script>
// components
import sectionHeader from '~/components/SectionHeader.vue'
import HamburgerMenu from '~/components/HamburgerMenu.vue'

// query
import posts from '~/queries/work/getWork.gql';

export default {
    components: {
        HamburgerMenu,
        sectionHeader,
    },
    apollo: {
        entries: {
            query: posts,
            variables: {
                "section": "work",
                "orderBy": "postdate Desc",
                "relatedTo": 25
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