<template>
    <div>
        <h3>Pull Quote</h3>
        <img src="{{image.url}}">
    </div>
</template>

<script>
export default {
    props:[
        'image',
        'imageWidth',
        'backgroundColor'
    ]
}
</script>