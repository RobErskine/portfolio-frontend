<template>  
<div>
</div>  
</template>

<style lang="scss">
</style>

<script>
export default {
    mounted: function(){
        
    },
    head (){
        return {
            title: 'Rob Erskine - Creative Developer',
            meta: [
                { hid: 'og:title', name: 'og:title', content: 'Rob Erskine - Creative Developer' },
                { hid: 'twitter:title', name: 'twitter:title', content: 'Rob Erskine - Creative Developer' },
                { hid: 'description', name: 'description', content: 'Creative designer, developer, and leader obsessed with solving complex digital problems.' },
                { hid: 'og:description', name: 'og:description', content: 'Hey there 👋 I’m a creative designer, developer, and leader obsessed with solving complex problems' },
                { hid: 'og:image', name: 'og:image', content: 'https://roberskine.com/images/homepage-share.png?v2' },
                { hid: 'og:type', name: 'og:type', content: 'website'},
                { hid: 'og:title', name: 'og:title', content: 'Rob Erskine - Creative Development'},
                { hid: 'og:url', 'name': 'og:url', content: 'https://roberskine.com'},
                { hid: 'twitter:card', name:"twitter:card", content:"summary_large_image"},
                { hid: 'twitter:image', name: 'twitter:image', content: 'https://roberskine.com/images/homepage-twitter-share.png?v2' }
            ],
            link: [
                { rel: 'canonical', href: 'https://roberskine.com' },
                { rel: 'me', href: 'https://social.bfmw.co/@roberskine' }
            ]
        }
    },
}
</script>
