<template>
    <section class="intro section-intro" :class="className">
        <heading2 :post-title="postTitle"></heading2>
        <component v-bind:is="stepComponent"></component>
    </section>
</template>

<style lang="scss">

section.intro{
    position:relative;
    display:flex;
    width:100%;
    background-color:#222;
    canvas{
        position:absolute;
        top:50%;
        left:50%;
        width:100%;
        height:100%;
        max-width:100%;
        max-height:100%;
        z-index:8;
        transform:translateX(-50%) translateY(-50%);
    }
    span.copy{
        width:90%;
        display:block;
        text-align:center;
        position:absolute;
        z-index:9;
        top:70%;
        left:50%;
        transform:translateX(-50%) translateY(-50%) rotate($rotate);
        margin:0px;
        padding:1em;
        color:#fff;
        h1{
            font-size:8vw;
            line-height:0;
        }
        p{
            font-size:16px;
            display:block;
            margin:0 auto;
            text-shadow: 0.25vw 0.25vw 0vw #000;
            font-weight:700;
            transition:all 0.3s ease-in-out;
            &::selection{
            text-shadow: 0.25vw 0.25vw 0vw $secondary;
            }
        }
    }
    & > div{
        height:100%;
        display:block;
        width:50%;
    }
}

section.intro.for-fun{
    background-color:#ff364e;
}

section.intro.contact{
    background-color:#75ddff;
}

section.intro.blog{
    background-color:#f4f8fe;
    background-image: repeating-linear-gradient(0deg, transparent, transparent 4vh, #B3E5FC 4vh, #B3E5FC 4.2vh);
    position:relative;
    &:before{
        content:"";
        display:block;
        width:2px;
        height:100%;
        position:absolute;
        top:0px;
        left:72px;
        bottom:0px;
        background-color:red;
    }
}

section.intro.section-intro{
    canvas{
        height:auto !important; //todo remove !importants
        width:auto !important;
        margin:0 auto;
        cursor:grab;
        &:active:hover{
            cursor:grabbing;
        }
    }   
}

.panel.has-content{
    section.intro.section-intro{
        &:after{
            content:"";
            width:100%;
            padding-top:75%;
        }
    }
}

.show-all .panel.has-content section.intro.section-intro:after{
    padding-top:150%;
}

@media all and (min-width:600px){
    .panel.has-content{
        section.intro.section-intro{
            &:after{
                padding-top:30%;
            }
        }
    }

    .show-all .panel.has-content section.intro.section-intro:after{
        padding-top:30%;
    }
}

@media all and (min-width: 700px){
    section.intro{
        span.copy{
            p{
                font-size:3.5vw;
                max-width:80vw;
            }
        }
    }
}
</style>

<script>
import heading2 from './headings/heading2';

export default {
    name: "SectionHeader",
    components: {
        heading2
    },
    props: [
        'postTitle', 'className', 'canvas'
    ],
    computed: {
        stepComponent() {
            let data = this.canvas.split('/')[2];
            return () => import(`./animations/${data}`);
        }
    },
}
</script>