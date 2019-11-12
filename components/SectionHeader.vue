<template>
    <section class="intro section-intro" :class="className">
        <heading2 :post-title="postTitle"></heading2>
        <component v-bind:is="canvas"></component>
        {{canvas}} <!-- this echos out robust-animation-1 -->
    </section>
</template>

<script>
import heading2 from './headings/heading2';

export default {
    components: {
        heading2
    },
    props: [
        'postTitle', 'className', 'canvas'
    ]
}
</script>