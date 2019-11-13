<template>
    <section class="intro section-intro" :class="className">
        <heading2 :post-title="postTitle"></heading2>
        <component v-bind:is="stepComponent"></component>
    </section>
</template>

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