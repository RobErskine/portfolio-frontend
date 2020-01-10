<template>
    <div>
        <h3>Rich Text</h3>
        {{richText}}
    </div>
</template>

<script>
export default {
    props:[
        'richText',
        'fontColor',
        'backgroundColor'
    ]
}
</script>