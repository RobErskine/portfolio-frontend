<template>
    <h2 class="heading" :data-title="postTitle"><span>{{postTitle}}</span></h2>
</template>

<script>
export default {
    props:[
        'postTitle'
    ]
}
</script>