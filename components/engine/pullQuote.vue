<template>
    <div>
        <h3>Pull Quote</h3>
        {{quote}}
    </div>
</template>

<script>
export default {
    props:[
        'quote',
        'quoteSize',
        'attribution',
        'attributionLink',
        'fontColor',
        'backgroundColor'
    ]
}
</script>